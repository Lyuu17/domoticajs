<template>
  <div>
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
</template>

<script setup>
import { useFirestore } from 'vuefire';

import LightBulbOn from "@/components/icons/LightBulbOn.vue";
import LightBulbOff from "@/components/icons/LightBulbOff.vue";
import ToggleSwitch from "@/components/icons/ToggleSwitch.vue";
import ToggleSwitchOff from "@/components/icons/ToggleSwitchOff.vue";

import { switchRoomDevice } from "@/components/api";

defineProps({
  device: Object
});

const db = useFirestore();

const switchExecutor = (room, device) => {
  switchRoomDevice(db, room, device);
}
</script>