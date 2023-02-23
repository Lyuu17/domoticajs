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
            <div v-if="device.type == 0">
              <p class="flex flex-col justify-center h-[100%] text-2xl">
                {{ device.temp }} {{ device.suffix }}
              </p>
            </div>

            <!-- Executor -->
            <div v-else>
              <button class="flex flex-col justify-center h-[100%] w-16" @click="switchExecutor(room.name, device.name)">
                <span v-if="device.iconSet == 'bulb'">
                  <LightBulbOff v-if="!device.status" fill="#ccc"/>
                  <LightBulbOn v-if="device.status" fill="#ffcc00"/>
                </span>

                <span v-if="device.iconSet == 'toggleSwitch'">
                  <ToggleSwitchOff v-if="!device.status" fill="#ccc"/>
                  <ToggleSwitch v-if="device.status" fill="#0f0"/>
                </span>
              </button>
            </div>
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
import { getRoomCollection, switchRoomDevice } from "@/components/api";

import AddIcon from "@/components/icons/AddIcon.vue";
import LightBulbOn from "@/components/icons/LightBulbOn.vue";
import LightBulbOff from "@/components/icons/LightBulbOff.vue";
import ToggleSwitch from "@/components/icons/ToggleSwitch.vue";
import ToggleSwitchOff from "@/components/icons/ToggleSwitchOff.vue";

import AddRoomModal from "@/components/AddRoomModal.vue";
import AddDeviceModal from "@/components/AddDeviceModal.vue";

const deviceModal = ref(false), roomModal = ref(false);

const db = useFirestore();

const roomsCollection = useCollection(getRoomCollection(db));

const switchExecutor = (room, device) => {
  switchRoomDevice(db, room, device);
}

</script>

<style scoped>

</style>