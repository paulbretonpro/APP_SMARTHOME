<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <FontAwesomeIcon
              class="w-auto text-indigo-600 fa-xl"
              :icon="faUmbrella"
            ></FontAwesomeIcon>
            <span class="ml-2 text-gray-600 font-extrabold">App smarthome</span>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="route in routes"
              :key="route.path"
              :to="route.path"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{
                'border-b-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium':
                  $route.path === route.path,
              }"
            >
              {{ route.label }}
            </NuxtLink>
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <FontAwesomeIcon
              :icon="faBurger"
              class="fa-xl"
              v-if="!open"
            ></FontAwesomeIcon>
            <FontAwesomeIcon :icon="faX" class="fa-xl" v-else></FontAwesomeIcon>
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <div
          v-for="route in routes"
          :key="route.path"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="{
            'bg-indigo-50 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 border-l-indigo-500 text-base font-medium':
              $route.path === route.path,
          }"
        >
          <NuxtLink class="w-full" :to="route.path">
            <DisclosureButton class="w-full text-left">{{
              route.label
            }}</DisclosureButton>
          </NuxtLink>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faX, faBurger, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { TNavbarItem } from "types/navbar";

defineProps<{
  routes: TNavbarItem[];
}>();
</script>
