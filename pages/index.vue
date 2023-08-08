<template>
  <InnerLoader :loading="exportLoading">
    <div class="text-4xl text-slate-600 font-extrabold">Dashbord</div>
    <div class="text-gray-400 mb-8">
      Dashboard for viewing api endpoint status
    </div>
    <div class="flex flex-col sm:flex-row flex-wrap gap-4">
      <InnerLoader :loading="sensorLoading">
        <DashboardCardStatusApi
          api="Home sensor"
          :status="sensorApiIsActive.status"
          :last-record="sensorApiIsActive.lastUpdate"
          @click="handleGoToSensorPage"
        ></DashboardCardStatusApi>
      </InnerLoader>
      <InnerLoader :loading="weatherLoading">
        <DashboardCardStatusApi
          api="Weather"
          :status="weatherApiIsActive.status"
          :last-record="weatherApiIsActive.lastUpdate"
          @click="handleGoToWeatherPage"
        ></DashboardCardStatusApi>
      </InnerLoader>
      <InnerLoader :loading="captorLoading">
        <DashboardCardStatusApi
          api="Energy consumption"
          :status="captorApiIsActive.status"
          :last-record="captorApiIsActive.lastUpdate"
          @click="handleGoToCaptorPage"
        ></DashboardCardStatusApi>
      </InnerLoader>
    </div>
    <div class="my-12 flex flex-wrap justify-between">
      <div>
        <div class="text-4xl text-slate-600 font-extrabold">Export data</div>
        <div class="text-gray-400">Export data to a csv file</div>
      </div>
      <Button :left-icon="faDownload" @click="handleCreateExport"
        >Export</Button
      >
    </div>
  </InnerLoader>
  <div class="flex flex-wrap flex-col gap-4 lg:flex-row">
    <DashboardCardChart title="Temperature inside home">
      <ChartLine
        v-if="allSensor.length > 0"
        :data="allSensor"
        data-name="temperature"
        label="Temperature (°C)"
      ></ChartLine>
    </DashboardCardChart>
    <DashboardCardChart title="Temperature outside home">
      <ChartLine
        v-if="allWeather.length > 0"
        :data="allWeather"
        data-name="temperature"
        label="Temperature (°C)"
      ></ChartLine>
    </DashboardCardChart>
    <DashboardCardChart title="Consumption energy">
      <ChartLine
        v-if="allCaptor.length > 0"
        :data="allCaptor"
        data-name="consumption"
        label="Consumption (W)"
      ></ChartLine>
    </DashboardCardChart>
  </div>
</template>
<script setup lang="ts">
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const {
  captorApiIsActive,
  sensorApiIsActive,
  weatherApiIsActive,
  captorLoading,
  exportLoading,
  sensorLoading,
  weatherLoading,
  handleGoToCaptorPage,
  handleGoToSensorPage,
  handleGoToWeatherPage,
  fetchExport,
  allSensor,
  allWeather,
  allCaptor,
} = useDashbord();

const handleCreateExport = async () => await fetchExport();
</script>
