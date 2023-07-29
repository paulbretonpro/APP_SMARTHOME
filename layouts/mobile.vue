<template>
  <div>
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
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const itemNavbar: TNavbarItem[] = [
  { label: "Dashboard", path: "/", icon: faGaugeHigh },
  { label: "Weather", path: "/weather", icon: faCloud },
  { label: "Home sensor", path: "/house", icon: faHouseSignal },
  { label: "Home consumption", path: "/captor", icon: faWind },
];
</script>
