<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex gap-4 flex-wrap justify-between sm:mb-8">
    <div>
      <div class="font-bold text-3xl text-slate-800">{{ title }}</div>
      <div class="text-slate-500">
        <slot name="desc">{{ desc }}</slot>
      </div>
    </div>
    <Button :left-icon="faRefresh" @click="handleRefresh">Refresh</Button>
  </div>
  <InnerLoader :loading="pending">
    <div class="flex flex-col">
      <div class="inline-block min-w-full py-2 align-middle">
        <div
          class="overflow-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="(col, index) in columns"
                  :key="index"
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="(d, index) in responses?.payload.data" :key="index">
                <td
                  v-for="(pos, idx) in Object.entries(d).length"
                  :key="idx"
                  class="whitespace-nowrap pl-4 pr-3 py-4 text-sm text-gray-500"
                >
                  {{ matchColumnData(d, idx) }}
                </td>
              </tr>
            </tbody>
            <tfoot v-if="responses?.payload.data.length === 0">
              <tr class="font-bold text-sm text-slate-600">
                <td colspan="100" class="text-center py-4">
                  No data available ... Please refresh
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </InnerLoader>

  <Pagination
    :current="page"
    :total="responses?.payload.total"
    @previous-page="handlePrevious"
    @next-page="handleNext"
  ></Pagination>
</template>

<script setup lang="ts">
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { TCaptor, TColumns, TSensor, TWeather } from "~/types/data";

const props = defineProps<{
  columns: TColumns[];
  title: string;
  desc?: string;
  api: "sensor" | "weather" | "captor";
}>();

const { fullDate } = useDate();
const api_url = useRuntimeConfig().public.API_URL;

const page = ref(1);

const {
  pending,
  data: responses,
  refresh,
} = await useLazyAsyncData(
  props.api,
  () =>
    $fetch(`${api_url}/api/${props.api}`, {
      params: {
        page: page.value,
        orderBy: "desc",
      },
    }),
  {
    server: false,
    watch: [page],
    default: () => {
      return {
        payload: {
          data: [],
          total: 1,
        },
      };
    },
  }
);

const handleRefresh = () => {
  page.value = 1;
  refresh();
};
const handleNext = () => (page.value += 1);
const handlePrevious = () => (page.value -= 1);

/**
 * Get the value by column namex
 *
 * @param data
 * @param columnIndex
 */
const matchColumnData = (
  data: TWeather | TSensor | TCaptor,
  columnIndex: number
) => {
  const columnName = props.columns[columnIndex] as TColumns;
  if (columnName.name === "datetime") return fullDate(data[columnName.name]);
  return data[columnName.name];
};
</script>
