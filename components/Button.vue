<template>
  <button
    type="button"
    class="h-fit w-full sm:w-fit inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm"
    :class="{
      'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500':
        white,
      'border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500':
        !white,
      'border border-red-500 text-white-700 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500':
        red,
      'cursor-not-allowed opacity-70': disabled,
    }"
  >
    <div class="flex gap-2 items-center">
      <FontAwesomeIcon :icon="leftIcon" v-if="leftIcon"></FontAwesomeIcon>
      <slot />
      <FontAwesomeIcon :icon="rightIcon" v-if="rightIcon"></FontAwesomeIcon>
    </div>
  </button>
</template>
<script setup lang="ts">
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  white?: boolean;
  red?: boolean;
  disabled?: boolean;
}>();
</script>
