<template>
  <div class="h-96">
    <Line :data="chartData" :options="chartOptions"></Line>
  </div>
</template>
<script setup lang="ts">
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TSensor } from "types/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps<{
  data: TSensor[];
  labelName: string;
  dataName: string;
}>();

const { $dayjs } = useNuxtApp();

const chartData = computed(() => {
  return {
    labels: props.data.map(
      (data) => $dayjs.utc(data[props.labelName]).format("ddd DD hh") + "h"
    ),
    datasets: [
      {
        label: props.dataName,
        backgroundColor: "#f87979",
        data: props.data.map((data) => data[props.dataName]),
        tension: 0.2,
      },
    ],
  };
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
