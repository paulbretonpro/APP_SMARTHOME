<template>
  <div class="flex gap-4 flex-wrap justify-between sm:mb-8">
    <div>
      <div class="font-bold text-3xl text-slate-800">Office sensor</div>
      <div class="text-slate-500">
        Sensor collects office temperature and humidity on an hourly basis
      </div>
    </div>
    <Button :left-icon="faRefresh" @click="handleRefresh">Refresh</Button>
  </div>
  <InnerLoader :loading="loading">
    <Table :columns="columns" :data="sensor"></Table>
  </InnerLoader>
</template>
<script setup lang="ts">
import { useSensorStore } from "~/stores/sensor";
import { TColumns } from "types/data";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const store = useSensorStore();

const columns: TColumns[] = [
  { label: "Temperature", name: "temperature" },
  { label: "Humidity", name: "humidity" },
  { label: "Datetime", name: "datetime" },
];

const sensor = computed(() => store.sensor);
const loading = computed(() => store.loading);

const handleRefresh = async () =>
  await store.fetch({
    orderBy: "desc",
  });

await handleRefresh();
</script>
