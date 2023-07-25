<template>
  <div class="relative" :class="classes">
    <slot />
    <div
      class="absolute top-0 bg-gray-50/40 w-full h-full flex items-center justify-center"
      v-if="loading"
    >
      <div
        class="h-8 w-8 animate-spin rounded-full border-indigo-600 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  classes?: string;
  loading: boolean;
}>();
</script>
