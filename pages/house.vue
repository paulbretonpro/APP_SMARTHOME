<template>
  <TableWithHeader
    title="Office sensors"
    desc="Sensor collects office temperature and humidity on an hourly basis"
    :columns="columns"
    api="sensor"
  ></TableWithHeader>
</template>
<script setup lang="ts">
import { TColumns } from "types/data";

const columns: TColumns[] = [
  { label: "Delete", name: "id" },
  { label: "Temperature", name: "temperature" },
  { label: "Humidity", name: "humidity" },
  { label: "Datetime", name: "datetime" },
];
</script>
