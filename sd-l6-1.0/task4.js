// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export async function delUser(id) {
  // Se adquiere la ulr donde se encuentra el usuario a eliminar
  const url = getServerURL() + "/users/" + id;

  // Se envia DELETE al servidor para eliminar el usuario
  const response = await fetch(url, {
    method: "DELETE"
  });

  return response.ok;
}