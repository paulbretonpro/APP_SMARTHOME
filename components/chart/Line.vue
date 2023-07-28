<template>
  <div class="h-96 w-fit">
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
import { TCaptor, TSensor, TWeather } from "types/data";

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
  data: TSensor[] | TWeather[] | TCaptor[];
  dataName: string;
}>();

const { getHours } = useDate();

const chartData = computed(() => {
  return {
    labels: props.data.map((data) => getHours(data.datetime)),
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
  scales: {
    y: {
      stepSize: 0.5,
    },
  },
});
</script>
