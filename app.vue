<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { isMobile } = useDevice();

const layout = isMobile ? "mobile" : "default";
</script>
