<template>
  <div>
    <NuxtLayout>
      <ClientOnly>
        <template #fallback>
          <InnerLoader loading classes="h-full"></InnerLoader>
        </template>
        <NuxtPage />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
