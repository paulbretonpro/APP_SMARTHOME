<script setup lang="ts">
const { $dayjs } = useNuxtApp();

interface ISensor {
  temperature: number;
  humidity: number;
}

const timer = ref<number>(0);

const { pending, data: listSensors } = await useAsyncData(
  "sensors",
  () => $fetch("/api/sensor"),
  { watch: [timer], default: () => [], lazy: true }
);

const lastUpdated = computed(() => {
  return listSensors.value.length > 0
    ? $dayjs(listSensors.value[0]?.datetime).format("HH:mm DD/MM/YYYY")
    : "No information";
});

setInterval(() => (timer.value += 1), 10000);
</script>
<template>
  <div>
    <div>Last Update : {{ lastUpdated }}</div>
    <div>
      <div v-for="(sensor, index) in listSensors" :key="index">
        {{ sensor.temperature }}
      </div>
    </div>
  </div>
</template>
