<template>
  <div class="flex flex-row justify-center">
    <div v-for="room in roomsCollection" :key="room.id"
      class="m-1">
      <h1>
        {{ room.name }}
      </h1>

      <div class="flex flex-row">
        <div v-for="device, ii in room.devices" :key="ii"
          class="border p-1 mr-1">
          <h2 class="text-center">
            {{ device.name }}
          </h2>

          <!-- Sensor -->
          <div v-if="device.type == 0">
            <p class="text-center">
              {{ device.temp }} ºC
            </p>
          </div>

          <!-- Executor -->
          <div v-else>
            <button class="w-16 h-16" @click="switchExecutor(room.name, device.name)">
              <span v-if="device.iconSet == 'bulb'">
                <LightBulbOff v-if="!device.status" fill="#000"/>
                <LightBulbOn v-if="device.status" fill="#ffcc00"/>
              </span>

              <span v-if="device.iconSet == 'toggleSwitch'">
                <ToggleSwitchOff v-if="!device.status" fill=""/>
                <ToggleSwitch v-if="device.status" fill=""/>
              </span>
            </button>
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