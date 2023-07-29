<template>
  <TableWithHeader
    title="Office consumption"
    desc="Sensor collects office consumption on an hourly basis"
    :columns="columns"
    api="captor"
  ></TableWithHeader>
</template>
<script setup lang="ts">
import { TColumns } from "types/data";

const columns: TColumns[] = [
  { label: "Consumption (kW)", name: "consumption" },
  { label: "Datetime", name: "datetime" },
];
</script>
