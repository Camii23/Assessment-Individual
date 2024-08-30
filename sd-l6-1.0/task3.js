// Task 3: addUser(first_name, last_name, email)


import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {
    
  const url = getServerURL();
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  // Generar un id de usuario
  const newId = users.length + 1;

  // Se crea un nuevo objeto usuario
  const newUser = {
    id: newUderId,
    first_name: first_name,
    last_name: last_name,
    email: email
  };

  // Se envia un POST al servidor para crear un nuevo usuario
  const addUserResponse = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({newUser})
  });

  const addUser = await addUserResponse.json();
  const output = `{
  id: ${addUser.id},
  first_name: '${addUser.first_name}',
  last_name: '${addUser.last_name}',
  email: '${addUser.email}'
}`;

  // imprimir si la adicion del nuevo usuario fue exitoso
  return console.log(output)
}