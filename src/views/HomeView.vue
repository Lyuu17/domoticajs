<template>
  <AddRoomModal v-if="roomModal" @closeModal="roomModal = false"/>
  <AddDeviceModal v-if="deviceModal" @closeModal="deviceModal = false"/>

  <div class="flex flex-row justify-center">
    <div v-for="room in roomsCollection" :key="room.id"
      class="m-1 p-4 bg-slate-500">
      <h1 class="text-center font-bold text-white">
        {{ room.name }}
      </h1>

      <div class="mt-2 flex flex-row">
        <div v-for="device, ii in room.devices" :key="ii"
          class="border rounded p-1 mr-1 w-32 h-32 bg-white">
          <h2 class="text-center text-md">
            {{ device.name }}
          </h2>

          <div class="flex justify-center h-1/2 m-auto">
            <!-- Sensor -->
            <Sensor v-if="device.type == 0" :device="device"/>

            <!-- Executor -->
            <Executor v-if="device.type == 1" :device="device"/>
          </div>
        </div>

        <button @click="deviceModal = !deviceModal" 
          class="relative z-10 p-2 h-32 text-white bg-blue-500 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
          <AddIcon/>
        </button>
      </div>
    </div>

    <button @click="roomModal = !roomModal" 
      class="relative z-10 p-2 text-white bg-green-500 border border-transparent rounded-md focus:border-green-500 focus:ring-opacity-40 focus:ring-green-300 focus:ring focus:outline-none">
      <AddIcon/>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFirestore, useCollection } from "vuefire";
import { getRoomCollection } from "@/components/api";

import AddIcon from "@/components/icons/AddIcon.vue";

import Sensor from "@/components/Sensor.vue";
import Executor from "@/components/Executor.vue";

import AddRoomModal from "@/components/AddRoomModal.vue";
import AddDeviceModal from "@/components/AddDeviceModal.vue";

const deviceModal = ref(false), roomModal = ref(false);

const db = useFirestore();

const roomsCollection = useCollection(getRoomCollection(db));

</script>

<style scoped>

</style>