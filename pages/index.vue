<template>
  <div class="text-3xl text-slate-600 font-extrabold">Dashbord</div>
  <div class="text-gray-400 mb-8">
    Dashboard for viewing api endpoint status
  </div>
  <div class="flex flex-col sm:flex-row flex-wrap gap-4">
    <InnerLoader :loading="sensorLoading">
      <DashboardCardStatusApi
        api="Home sensor"
        :status="sensorApiIsActive.status"
        :last-record="sensorApiIsActive.lastUpdate"
      ></DashboardCardStatusApi>
    </InnerLoader>
    <InnerLoader :loading="weatherLoading">
      <DashboardCardStatusApi
        api="Weather"
        :status="weatherApiIsActive.status"
        :last-record="weatherApiIsActive.lastUpdate"
      ></DashboardCardStatusApi>
    </InnerLoader>
    <InnerLoader :loading="captorLoading">
      <DashboardCardStatusApi
        api="Energy consumption"
        :status="captorApiIsActive.status"
        :last-record="captorApiIsActive.lastUpdate"
      ></DashboardCardStatusApi>
    </InnerLoader>
  </div>
</template>
<script setup lang="ts">
import { useCaptorStore } from "~/stores/captor";
import { useWeatherStore } from "~/stores/weather";
import { useSensorStore } from "~/stores/sensor";

const sensorStore = useSensorStore();
const weatherStore = useWeatherStore();
const captorStore = useCaptorStore();

useAsyncData("sensor", async () => await sensorStore.fetch());
useAsyncData("weather", async () => await await weatherStore.fetch());
useAsyncData("captor", async () => await captorStore.fetch());

const sensorApiIsActive = computed(() => sensorStore.isActive);
const weatherApiIsActive = computed(() => weatherStore.isActive);
const captorApiIsActive = computed(() => captorStore.isActive);

const sensorLoading = computed(() => sensorStore.loading);
const weatherLoading = computed(() => weatherStore.loading);
const captorLoading = computed(() => captorStore.loading);
</script>
