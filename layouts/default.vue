<template>
  <!-- DESKTOP LAYOUT-->
  <div class="h-screen hidden md:flex">
    <div class="side-bar flex-nowrap h-full bg-indigo-500">
      <layoutNavbar :routes="itemNavbar"></layoutNavbar>
    </div>
    <div class="content flex-1 p-8 overflow-auto bg-gray-50">
      <slot />
    </div>
  </div>

  <!--MOBILE LAYOUT -->
  <div class="block md:hidden">
    <LayoutMenuBurger :routes="itemNavbar"></LayoutMenuBurger>
    <div class="pt-8 px-4">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { TNavbarItem } from "types/navbar";
import {
  faCloud,
  faGaugeHigh,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";

const itemNavbar: TNavbarItem[] = [
  { label: "Dashboard", path: "/", icon: faGaugeHigh },
  { label: "Weather", path: "/weather", icon: faCloud },
  { label: "Home sensor", path: "/house", icon: faHouseSignal },
];
</script>
