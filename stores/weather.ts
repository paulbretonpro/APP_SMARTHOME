import { defineStore } from "pinia";
import { TWeather } from "types/data";
import { TFilterDate } from "types/filters";

export const useWeatherStore = defineStore("weather", {
  state: () => ({ weather: [] as TWeather[], loading: false }),
  actions: {
    async fetch(params?: TFilterDate) {
      try {
        this.loading = true;
        // get apiURL
        const api_url = useRuntimeConfig().public.API_URL;

        const response = await $fetch(`${api_url}/api/weather`, {
          params: {
            ...params,
          },
        });
        this.weather = response.payload.data;
        this.loading = false;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
  },
  getters: {
    isActive: (state) => {
      if (state.weather.length > 0) {
        const currentDate = new Date();
        const lastRecord = new Date(state.weather[0].datetime);
        const differenceBetweenHour =
          currentDate.getUTCHours() - lastRecord.getHours();

        return { status: differenceBetweenHour === 0, lastUpdate: lastRecord };
      } else {
        return { status: false, lastUpdate: null };
      }
    },
  },
});
