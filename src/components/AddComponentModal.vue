<template>
  <div class="relative z-10" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Añadir componente</h3>

              <div class="mt-4 flex justify-around border rounded p-1">
                <label for="room" class="ml-1">
                  <input type="radio" id="room" :value="componentTypes.ROOM" v-model="componentType">
                  Sala
                </label>

                <label for="room" class="ml-1">
                  <input type="radio" id="device" :value="componentTypes.DEVICE" v-model="componentType">
                  Dispositivo
                </label>
              </div>

              <div class="mt-2 p-2">
                <div v-if="componentType == componentTypes.ROOM">
                  <!-- Room -->

                  <label for="room_name">Nombre Sala
                    <input type="text" id="room_name" v-model="room_name" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  </label>
                </div>

                <div v-if="componentType == componentTypes.DEVICE">
                  <!-- Device -->
                  <div>
                    <label for="rooms" class="text-sm">Sala
                      <select id="rooms" v-model="device_room" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected></option>
                        <option v-for="e, i in rooms" :value="e.name">{{ e.name }}</option>
                      </select>
                    </label>
                  </div>

                  <div class="mt-2">
                    <label for="device_name" class="text-sm">Nombre Dispositivo
                      <input type="text" id="device_name" v-model="device_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </label>
                  </div>

                  <div class="mt-2">
                    <label class="text-sm">Tipo: 
                      <label for="sensor">
                        <input type="radio" id="sensor" :value="deviceTypes.SENSOR" v-model="device_type">
                        Sensor
                      </label>

                      <label for="room" class="ml-1">
                        <input type="radio" id="executor" :value="deviceTypes.EXECUTOR" v-model="device_type">
                        Ejecutor
                      </label>
                    </label>
                  </div>

                  <div class="mt-2" v-if="device_type == deviceTypes.SENSOR">
                    <label for="device_suffix" class="text-sm">Sufijo
                      <input type="text" id="device_suffix" v-model="device_suffix" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </label>
                  </div>

                  <div class="mt-2" v-if="device_type == deviceTypes.EXECUTOR">
                    <label for="iconSet" class="text-sm">Icono
                      <select id="iconSet" v-model="device_icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected></option>
                        <option v-for="e, i in iconSet" :key="i" :value="i">{{ e }}</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button @click="emits('closeModal')" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
              Cancelar
            </button>
            <button @click="addComponent" class="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useCollection, useFirestore } from "vuefire";
import { getRoomCollection, queryRoom, addRoom, addRoomDevices } from "@/components/api";

const db = useFirestore();
const rooms = useCollection(getRoomCollection(db));

const componentTypes = {
  ROOM: 0,
  DEVICE: 1
};

const deviceTypes = {
  SENSOR: 0,
  EXECUTOR: 1
};

const iconSet = {
  bulb: "Bombilla",
  toggleSwitch: "Interruptor"
};

const componentType = ref(componentTypes.ROOM), deviceType = ref(deviceTypes.SENSOR);

const 
  room_name = ref("");
const 
  device_name = ref(""),
  device_type = ref(0),
  device_room = ref(""),
  device_suffix = ref("ºC"),
  device_icon = ref("");

const emits = defineEmits("closeModal");

const addComponent = async () => {

  const doc = await queryRoom(db, componentType.value == componentTypes.ROOM ? room_name.value : device_room.value);
  switch (componentType.value) {
    case componentTypes.ROOM: {
      if (doc != null)
      {
        alert("Existe una sala con ese nombre");
        return;
      }

      await addRoom(db, room_name.value);

      alert("Sala añadida");
      break;
    }
    case componentTypes.DEVICE: {
      if (doc == null)
      {
        alert("No existe ninguna sala con ese nombre");
        return;
      }

      const deviceTemplate = {
        name: device_name.value,
        type: device_type.value
      };

      if (device_type.value == deviceTypes.SENSOR) {
        deviceTemplate["temp"] = 0.0;
        deviceTemplate["suffix"] = device_suffix.value;
      }
      else if (device_type.value == deviceTypes.EXECUTOR) {
        deviceTemplate["status"] = false;
        deviceTemplate["iconSet"] = device_icon.value;
      }

      const { name } = doc.data();
      await addRoomDevices(db, name, [deviceTemplate]);

      alert("Dispositivo añadido");

      return;
    }
  }
}

</script>

<style scoped>

</style>