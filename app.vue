<template>
  <NuxtPage />
</template>
<script setup lang="ts">
/*const { timer20min, hasAlrealdyValueThisHour } = useRefreshData();
interface IWeather {
  id: number;
  temperature: number;
  humidity: number;
  wind: number;
  datetime: Date;
}

const addNewWeather = async (
  humidity: number,
  temperature: number,
  wind: number
) => {
  // call WEATHER API
  const { data } = await useAsyncData("weather-api", () =>
    $fetch("https://api.api-ninjas.com/v1/weather?city=hanoi", {
      headers: { "X-Api-Key": "vlq7dkvbzK2lPyKj4Dzr8A==VIEjzOKKidA6NUUm" },
      contentType: "application/json",
    })
  );

  // post weather in database
  await useAsyncData("weather-update", () =>
    $fetch("/api/weather", {
      method: "POST",
      body: {
        temperature: data.value.temp,
        humidity: data.value.humidity,
        wind: data.value.wind_speed,
      },
    })
  );
};

const fetchLastWeather = async (): Promise<IWeather> => {
  const { data } = await useAsyncData("weather-last-updated", () =>
    $fetch("api/weather", {
      method: "GET",
      params: {
        last: 1,
      },
    })
  );
  return (data.value as IWeather) || null;
};

watch(timer20min, async () => {
  const lastUpdated = await fetchLastWeather();
  if (
    lastUpdated === null ||
    hasAlrealdyValueThisHour(lastUpdated.datetime) === false
  ) {
    await addNewWeather(22, 22, 22);
  }
});*/
</script>
