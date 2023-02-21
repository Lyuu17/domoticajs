import { collection, addDoc, query, where, getDocs, updateDoc, arrayUnion, limit } from "@firebase/firestore";

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

export const addRoomDevices = async (db, room, data) => {
  const doc = await queryRoom(db, room);
  if (doc == null)
    return false;

  await updateDoc(doc.ref, {
    devices: arrayUnion(...data)
  });

  return true;
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

  await updateDoc(doc.ref, {...data});
}