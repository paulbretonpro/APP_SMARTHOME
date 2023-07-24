import { defineStore } from "pinia";
import { TWeather } from "types/data";

export const useWeatherStore = defineStore("weather", {
  state: () => ({ weather: [] as TWeather[] }),
  actions: {
    async fetch() {
      try {
        // get apiURL
        const api_url = useRuntimeConfig().public.API_URL;

        const response = await $fetch(`${api_url}/api/weather`);
        this.weather = response.payload.data;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
  },
});
