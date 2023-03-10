<template>
  <div class="relative z-10" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Editando dispositivo {{ deviceModalDevice }} en sala {{ deviceModalRoom }}</h3>

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
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button @click="emits('closeModal')" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
              Cancelar
            </button>
            <button @click="addComponent" class="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useFirestore } from "vuefire";
import { queryRoom, updateRoomDeviceData } from "@/components/api";

const props = defineProps({
  deviceModalDevice: String,
  deviceModalRoom: String,
  deviceModalType: Number,
  deviceModalSuffix: String,
  deviceModalIconSet: String
})

const db = useFirestore();

const deviceTypes = {
  SENSOR: 0,
  EXECUTOR: 1
};

const iconSet = {
  bulb: "Bombilla",
  toggleSwitch: "Interruptor"
};

const 
  device_name = ref(props.deviceModalDevice),
  device_type = ref(props.deviceModalType),
  device_suffix = ref(props.deviceModalSuffix),
  device_icon = ref(props.deviceModalIconSet);

const emits = defineEmits("closeModal");

const addComponent = async () => {

  const doc = await queryRoom(db, props.deviceModalRoom);

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
    deviceTemplate["info"] = "";
    deviceTemplate["suffix"] = device_suffix.value;
  }
  else if (device_type.value == deviceTypes.EXECUTOR) {
    deviceTemplate["status"] = false;
    deviceTemplate["iconSet"] = device_icon.value;
  }

  const { name } = doc.data();
  await updateRoomDeviceData(db, name, props.deviceModalDevice, deviceTemplate);

  alert("Dispositivo guardado");

  return;
}

</script>

<style scoped>

</style>