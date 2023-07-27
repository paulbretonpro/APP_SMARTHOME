import { defineStore } from "pinia";
import { TCaptor } from "types/data";
import { TFilterDate } from "types/filters";

export const useCaptorStore = defineStore("captor", {
  state: () => ({ captor: [] as TCaptor[], loading: false }),
  actions: {
    async fetch(params: TFilterDate) {
      try {
        this.loading = true;
        // get apiURL
        const api_url = useRuntimeConfig().public.API_URL;

        const response = await $fetch(`${api_url}/api/captor`, {
          params: {
            ...params,
          },
        });
        this.captor = response.payload.data;
        this.loading = false;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    },
  },
  getters: {
    isActive: (state) => {
      if (state.captor.length > 0) {
        const currentDate = new Date();
        const lastRecord = new Date(state.captor[0].datetime);
        const differenceBetweenHour =
          currentDate.getUTCHours() - lastRecord.getHours();

        return { status: differenceBetweenHour === 0, lastUpdate: lastRecord };
      } else {
        return { status: false, lastUpdate: null };
      }
    },
  },
});
