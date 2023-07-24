import { defineStore } from "pinia";
import { TSensor } from "../types/data";

export const useSensorStore = defineStore("sensor", {
  state: () => ({ sensor: [] as TSensor[] }),
  actions: {
    async fetch() {
      try {
        // get apiURL
        const api_url = useRuntimeConfig().public.API_URL;

        const response = await $fetch(`${api_url}/api/sensor`);
        this.sensor = response.payload.data;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
  },
});