<template>
  <TableWithHeader title="Weather Hanoï" :columns="columns" api="weather">
    <template v-slot:desc>
      Retrieve Hanoi weather every hour with api
      <a class="underline underline-offset-2" href="https://api-ninjas.com/"
        >https://api-ninjas.com/</a
      >
    </template>
  </TableWithHeader>
</template>
<script setup lang="ts">
import { TColumns } from "types/data";

const columns: TColumns[] = [
  { label: "Temperature", name: "temperature" },
  { label: "Feels like", name: "feels_like" },
  { label: "Humidity", name: "humidity" },
  { label: "Wind speed", name: "wind_speed" },
  { label: "Datetime", name: "datetime" },
];
</script>
