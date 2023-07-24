<template>
  <button
    type="button"
    class="h-fit inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
}>();
</script>
