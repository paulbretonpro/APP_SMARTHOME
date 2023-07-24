<template>
  <div class="p-4 w-60">
    <div class="text-white font-extrabold text-2xl mb-8 mt-4">
      Api smarthome
    </div>
    <div class="flex flex-col w-full gap-1">
      <nuxt-link v-for="route in routes" :key="route.label" :to="route.path">
        <div
          class="text-white p-2 rounded-lg hover:bg-indigo-600 hover:bg-opacity-75"
          :class="{
            'bg-indigo-600 font-bold': $route.path === route.path,
          }"
        >
          <font-awesome-icon :icon="route.icon" />
          {{ route.label }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TNavbarItem } from "types/navbar";

defineProps<{
  routes: TNavbarItem[];
}>();
</script>
