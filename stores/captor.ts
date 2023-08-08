import { defineStore } from "pinia";
import { TCaptor } from "types/data";
import { TFilterDate } from "types/filters";

const { isBetweenNowAndLessTwoHours } = useDate();

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
      const copyState = [...state.captor];
      const last = copyState.pop() || null;

      if (state.captor.length > 0 && last) {
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
