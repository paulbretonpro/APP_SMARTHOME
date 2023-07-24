<template>
  <Table :columns="columns" :data="sensor"></Table>
</template>
<script setup lang="ts">
import { useSensorStore } from "~/stores/sensor";
import { TColumns } from "types/data";

const store = useSensorStore();

const columns: TColumns[] = [
  { label: "Temperature", name: "temperature" },
  { label: "Humidity", name: "humidity" },
  { label: "Datetime", name: "datetime" },
];

const sensor = computed(() => store.sensor);

// Fetch sensor data
await store.fetch();
</script>
