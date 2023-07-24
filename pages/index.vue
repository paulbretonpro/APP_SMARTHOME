<template>
  <div class="text-3xl text-slate-600 font-extrabold">Dashbord</div>
  <div class="text-gray-400 mb-8">
    Dashboard for viewing api endpoint status
  </div>
  <div class="flex flex-col sm:flex-row flex-wrap gap-4">
    <DashboardCardStatusApi
      api="Home sensor"
      :status="sensorApiIsActive.status"
      :last-record="sensorApiIsActive.lastUpdate"
    ></DashboardCardStatusApi>
    <DashboardCardStatusApi
      api="Weather"
      :status="weatherApiIsActive.status"
      :last-record="weatherApiIsActive.lastUpdate"
    ></DashboardCardStatusApi>
    <DashboardCardStatusApi
      api="Energy consumption"
      :status="captorApiIsActive.status"
      :last-record="captorApiIsActive.lastUpdate"
    ></DashboardCardStatusApi>
  </div>
</template>
<script setup lang="ts">
import { useCaptorStore } from "~/stores/captor";
import { useWeatherStore } from "~/stores/weather";
import { useSensorStore } from "~/stores/sensor";

const sensorStore = useSensorStore();
const weatherStore = useWeatherStore();
const captorStore = useCaptorStore();

await sensorStore.fetch();
await weatherStore.fetch();
await captorStore.fetch();

const sensorApiIsActive = computed(() => sensorStore.isActive);
const weatherApiIsActive = computed(() => weatherStore.isActive);
const captorApiIsActive = computed(() => captorStore.isActive);
</script>
