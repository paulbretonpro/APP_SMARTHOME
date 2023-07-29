<template>
  <div class="bg-white border rounded-md p-4">
    <div class="flex gap-4 justify-between">
      <div class="text-slate-500 font-bold">{{ title }}</div>
      <div class="italic text-sm text-slate-400">Today</div>
    </div>
    <slot>
      <div
        class="text-sm text-slate-400 italic font-semibold text-center h-full flex items-center justify-center"
      >
        <div class="p-6">No data</div>
      </div>
    </slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
