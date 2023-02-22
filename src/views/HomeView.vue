<template>
  <div class="flex flex-row justify-center">
    <div v-for="room in roomsCollection" :key="room.id"
      class="m-1 p-4 bg-slate-500">
      <h1 class="text-center font-bold text-white">
        {{ room.name }}
      </h1>

      <div class="mt-2 flex flex-row">
        <div v-for="device, ii in room.devices" :key="ii"
          class="border rounded p-1 mr-1 w-32 h-32 bg-white">
          <h2 class="text-center">
            {{ device.name }}
          </h2>

          <div class="flex justify-center h-1/2 m-auto">
            <!-- Sensor -->
            <div v-if="device.type == 0">
              <p class="flex flex-col justify-center h-[100%]">
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFirestore, useCollection } from "vuefire";
import { getRoomCollection, switchRoomDevice } from "@/components/api";

import LightBulbOn from "@/components/icons/LightBulbOn.vue";
import LightBulbOff from "@/components/icons/LightBulbOff.vue";
import ToggleSwitch from "@/components/icons/ToggleSwitch.vue";
import ToggleSwitchOff from "@/components/icons/ToggleSwitchOff.vue";

const db = useFirestore();

const roomsCollection = useCollection(getRoomCollection(db));

const switchExecutor = (room, device) => {
  switchRoomDevice(db, room, device);
}

</script>

<style scoped>

</style>