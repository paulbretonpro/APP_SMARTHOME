<template>
  <div class="flex justify-between mb-8">
    <div>
      <div class="font-bold text-3xl text-slate-800">Weather Hanoï</div>
      <div class="text-slate-500">
        Retrieve Hanoi weather every hour with api
        <a class="underline underline-offset-2" href="https://api-ninjas.com/"
          >https://api-ninjas.com/</a
        >
      </div>
    </div>
    <Button :left-icon="faRefresh" @click="handleRefresh">Refresh</Button>
  </div>
  <Table :columns="columns" :data="weather"></Table>
</template>
<script setup lang="ts">
import { TColumns } from "types/data";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useWeatherStore } from "~/stores/weather";

const store = useWeatherStore();

const columns: TColumns[] = [
  { label: "Temperature", name: "temperature" },
  { label: "Feels like", name: "feels_like" },
  { label: "Humidity", name: "humidity" },
  { label: "Wind speed", name: "wind_speed" },
  { label: "Datetime", name: "datetime" },
];

const weather = computed(() => store.weather);

const handleRefresh = async () => await store.fetch();
</script>
