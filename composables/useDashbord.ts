import { useCaptorStore } from "~/stores/captor";
import { useWeatherStore } from "~/stores/weather";
import { useSensorStore } from "~/stores/sensor";
import { TExport } from "types/data";

export const useDashbord = () => {
  const router = useRouter();
  const { $dayjs } = useNuxtApp();
  const { todayUTC } = useDate();

  // Init store
  const sensorStore = useSensorStore();
  const weatherStore = useWeatherStore();
  const captorStore = useCaptorStore();

  const allSensor = computed(() => sensorStore.sensor);
  const allWeather = computed(() => weatherStore.weather);

  // Fetch data
  useAsyncData(
    "sensor",
    async () =>
      await sensorStore.fetch({
        date_start: todayUTC.value.start,
        date_end: todayUTC.value.end,
        perPage: 24,
      })
  );
  useAsyncData(
    "weather",
    async () =>
      await await weatherStore.fetch({
        date_start: todayUTC.value.start,
        date_end: todayUTC.value.end,
      })
  );
  useAsyncData(
    "captor",
    async () =>
      await captorStore.fetch({
        orderBy: "desc",
      })
  );

  // Variables active api
  const sensorApiIsActive = computed(() => sensorStore.isActive);
  const weatherApiIsActive = computed(() => weatherStore.isActive);
  const captorApiIsActive = computed(() => captorStore.isActive);

  // Variables loader
  const sensorLoading = computed(() => sensorStore.loading);
  const weatherLoading = computed(() => weatherStore.loading);
  const captorLoading = computed(() => captorStore.loading);
  const exportLoading = ref(false);

  // Function router
  const handleGoToWeatherPage = () => router.push("/weather");
  const handleGoToSensorPage = () => router.push("/house");
  const handleGoToCaptorPage = () => router.push("/captor");

  // Function create export
  const convertJsonToCsv = (data: TExport[]): string => {
    const replacer = (key: string, value: number | Date) =>
      value === null ? "" : value;
    const header = Object.keys(data[0]);
    const csv = [
      header.join(","), // header row first
      ...data.map((row) =>
        header
          .map((fieldName) => JSON.stringify(row[fieldName], replacer))
          .join(",")
      ),
    ].join("\r\n");

    return csv;
  };

  const forceFileDownload = (data: string) => {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      "Export_" + $dayjs().format("YYYY_MM_DD") + ".csv"
    );
    document.body.appendChild(link);
    link.click();
  };

  const fetchExport = async () => {
    try {
      exportLoading.value = true;
      // get apiURL
      const api_url = useRuntimeConfig().public.API_URL;
      const response = await $fetch(`${api_url}/api/export`);

      const csvData = convertJsonToCsv(response.payload as TExport[]);
      forceFileDownload(csvData);

      exportLoading.value = false;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return {
    sensorApiIsActive,
    weatherApiIsActive,
    captorApiIsActive,
    sensorLoading,
    weatherLoading,
    captorLoading,
    exportLoading,
    handleGoToWeatherPage,
    handleGoToSensorPage,
    handleGoToCaptorPage,
    fetchExport,
    allSensor,
    allWeather,
    todayUTC,
  };
};
