import { defineStore } from "pinia";
import { TWeather } from "types/data";
import { TFilterDate } from "types/filters";

const { isBetweenNowAndLessTwoHours } = useDate();

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
      const copyState = [...state.weather];
      const last = copyState.pop() || null;

      if (state.weather.length > 0 && last) {
        return {
          status: isBetweenNowAndLessTwoHours(last.datetime),
          lastUpdate: last.datetime,
        };
      } else {
        return { status: false, lastUpdate: null };
      }
    },
  },
});
