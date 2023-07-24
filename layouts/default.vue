<template>
  <div class="h-screen flex">
    <div class="side-bar flex-nowrap h-full bg-indigo-500">
      <layoutNavbar></layoutNavbar>
    </div>
    <div class="content flex-1 p-8 overflow-auto bg-gray-50">
      <slot />
    </div>
  </div>
</template>
