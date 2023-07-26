<template>
  <div class="bg-white border rounded-md p-4">
    <div class="flex justify-between">
      <div class="text-slate-500 font-bold">{{ title }}</div>
      <div class="italic text-sm text-slate-400">Today</div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
