<template>
  <div
    class="bg-white border rounded-lg overflow-hidden flex gap-4 p-4 items-center"
  >
    <div class="border border-dashed rounded-sm p-2" :class="classes">
      <FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
    </div>
    <div>
      <div class="font-bold text-slate-600 whitespace-nowrap">
        API {{ api }}
      </div>
      <div class="italic text-sm text-gray-500 whitespace-nowrap">
        {{
          lastRecord !== null
            ? $dayjs(lastRecord).format("DD/MM/YYYY hh:mm:ss")
            : "No registration"
        }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const { $dayjs } = useNuxtApp();

const props = defineProps<{
  api: string;
  status: boolean;
  lastRecord: Date | null;
}>();

const classes = computed(() =>
  props.status
    ? ["border-green-500 text-green-500"]
    : ["border-red-500 text-red-500"]
);

const icon = computed(() => (props.status ? faCheck : faX));
</script>
