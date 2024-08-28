// Task 3: addUser(first_name, last_name, email)


import { getServerURL } from "./task1.js";

export async function addUser(user) {
    
  const url = getServerURL();
  const response = await fetch(url + "/users");
  const users = await response.json();

  // Generar un id de usuario
  const newId = users.length + 1;

  // Se crea un nuevo objeto usuario
  const newUser = {
    id: String(newId),
    first_name: firstName,
    last_name: lastName,
    email: email
  };

  // Se envia un POST al servidor para crear un nuevo usuario
  const addUserResponse = await fetch(url + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });

  // imprimir si la adicion del nuevo usuario fue exitoso
  if (addUserResponse.ok) {
    console.log(`User added successfully: ${newUser.first_name} ${newUser.last_name}`);
  } else {
    console.error(`Error adding user: ${addUserResponse.status}`);
  }
}