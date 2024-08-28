// Task 2: listUsers()

import { getServerURL} from "./task1.js";

export async function listUsers() {
  // Se hace una solicitud al servidor para obtener la lista de usuarios
  const url = getServerURL();
  const response = await fetch(url+"/users");

  // Se obtiene la respuesta y se convierte en array (info de usuarios)
  const users = await response.json();

  // Recorre el array de usuarios y crea un string formateado para cada uno
  const formattedUsers = users
    .map(
      (user) =>
        `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
    )
    .join(",\n");

  // Imprime en la consola el array de usuarios formateado como un string
  return console.log(`[\n${formattedUsers}\n]`);
}