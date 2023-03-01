import { collection, addDoc, query, where, getDocs, updateDoc, arrayUnion, limit, deleteDoc } from "@firebase/firestore";

export const getRoomCollection = (db) => {
  return collection(db, "rooms");
}

export const queryRoom = async (db, name) => {
  const q = query(getRoomCollection(db), where("name", "==", name, limit(1)));
  const snapshot = await getDocs(q);
  if (snapshot.size == 0)
    return null;
  return snapshot.docs[0];
}

export const addRoom = async (db, name) => {
  await addDoc(getRoomCollection(db), {
    name: name,
    devices: {}
  });
}

export const renameRoom = async (db, name, newRoomName) => {
  const doc = await queryRoom(db, name);
  if (doc == null)
    return false;

  const data = doc.data();
  data.name = newRoomName;

  await updateDoc(doc.ref, { ...data });
}

export const removeRoom = async (db, name) => {
  const doc = await queryRoom(db, name);
  await deleteDoc(doc.ref);
}

export const addRoomDevices = async (db, room, data) => {
  const doc = await queryRoom(db, room);
  if (doc == null)
    return false;

  await updateDoc(doc.ref, {
    devices: arrayUnion(...data)
  });

  return true;
}

export const removeRoomDevice = async (db, room, device) => {
  const doc = await queryRoom(db, room);
  if (doc == null)
    return false;

  const data = doc.data();
  data.devices = data.devices.filter(e => e.name != device);

  await updateDoc(doc.ref, { ...data });
}

export const updateRoomDeviceData = async (db, room, device, newData) => {
  const doc = await queryRoom(db, room);
  if (doc == null)
    return false;

  const data = doc.data();
  for (let i = 0; i < data.devices.length; i++) {
    const dev = data.devices[i];
    if (dev.name == device) {
      data.devices[i] = { ...newData };
      break;
    }
  }

  await updateDoc(doc.ref, { ...data });
}

export const setRoomDeviceInfo = async (db, room, device, info) => {
  const doc = await queryRoom(db, room);
  if (doc == null)
    return false;

  const data = doc.data();

  const { devices } = data;

  for (let idx in devices) {
    if (devices[idx].name == device) {
      devices[idx].info = info;
      break;
    }
  }

  await updateDoc(doc.ref, { ...data });
}

export const switchRoomDevice = async (db, room, device) => {
  const doc = await queryRoom(db, room);
  if (doc == null)
    return false;

  const data = doc.data();

  const { devices } = data;

  for (let idx in devices) {
    if (devices[idx].name == device) {
      devices[idx].status = !devices[idx].status;
      break;
    }
  }

  await updateDoc(doc.ref, { ...data });
}