import { defineStore } from "pinia";
import { TSensor } from "../types/data";

export const useSensorStore = defineStore("sensor", {
  state: () => ({ sensor: [] as TSensor[], loading: false }),
  actions: {
    async fetch() {
      try {
        // get apiURL
        this.loading = true;
        const api_url = useRuntimeConfig().public.API_URL;

        const response = await $fetch(`${api_url}/api/sensor`);
        setTimeout(() => {
          this.sensor = response.payload.data;
          this.loading = false;
        }, 5000);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
  },
  getters: {
    isActive: (state) => {
      if (state.sensor.length > 0) {
        const currentDate = new Date();
        const lastRecord = new Date(state.sensor[0].datetime);
        const differenceBetweenHour =
          currentDate.getUTCHours() - lastRecord.getHours();

        return { status: differenceBetweenHour === 0, lastUpdate: lastRecord };
      } else {
        return { status: false, lastUpdate: null };
      }
    },
  },
});
