<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div
          class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
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
              <tr v-for="(d, index) in data" :key="index">
                <td
                  v-for="(pos, idx) in Object.entries(d).length"
                  :key="idx"
                  class="whitespace-nowrap pl-4 pr-3 py-4 text-sm text-gray-500"
                >
                  {{ matchColumnData(d, idx) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TCaptor, TColumns, TSensor, TWeather } from "~/types/data";

const props = defineProps<{
  columns: TColumns[];
  data: Array<TWeather | TSensor | TCaptor>;
}>();

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
  return data[columnName.name];
};
</script>
