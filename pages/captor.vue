<template>
  <div class="flex gap-4 flex-wrap justify-between sm:mb-8">
    <div>
      <div class="font-bold text-3xl text-slate-800">Office consumption</div>
      <div class="text-slate-500">
        Sensor collects office consumption on an hourly basis
      </div>
    </div>
    <Button :left-icon="faRefresh" @click="handleRefresh">Refresh</Button>
  </div>
  <InnerLoader :loading="loading">
    <Table :columns="columns" :data="captor"></Table>
  </InnerLoader>
</template>
<script setup lang="ts">
import { useCaptorStore } from "~/stores/captor";
import { TColumns } from "types/data";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const store = useCaptorStore();

const columns: TColumns[] = [
  { label: "Consumption (kW)", name: "consumption" },
  { label: "Datetime", name: "datetime" },
];

const captor = computed(() => store.captor);
const loading = computed(() => store.loading);

const handleRefresh = async () =>
  await store.fetch({
    orderBy: "desc",
  });
</script>
