<template>
  <nav class="my-4 flex items-center justify-between gap-4">
    <div class="-mt-px w-0 flex-1 flex">
      <Button
        :disabled="disabledPrevious"
        white
        :left-icon="faArrowLeftLong"
        @click="handlePrevious"
        >Previous</Button
      >
    </div>
    <div class="text-gray-500 text-sm">
      <span class="font-semibold">{{ current }}</span> / {{ maxPage }}
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <Button
        :disabled="disabledNext"
        white
        :right-icon="faArrowRightLong"
        @click="handleNext"
        >Next</Button
      >
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const props = defineProps<{
  current: number;
  total: number;
}>();

const emit = defineEmits(["next-page", "previous-page"]);

const maxPage = computed(() => Math.ceil(props.total / 10));

const disabledPrevious = computed(() => props.current === 1);
const disabledNext = computed(() => props.current === maxPage.value);

const handleNext = () => {
  if (!disabledNext.value) emit("next-page");
};
const handlePrevious = () => {
  if (!disabledPrevious.value) emit("previous-page");
};
</script>
