// Task 3: addUser(first_name, last_name, email)

/*INTENTO 1
import fetch from 'node-fetch';
import { getServerURL } from './task1.js';

export async function getUser(id) {
  try {
    const url = `${getServerURL()}/users/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching user with id ${id}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(`Error getting user with id ${id}:`, error);
  }
}*/

import { getServerURL } from "./task1.js";

export async function addUser(user) {
    
  const url = getServerURL();
  const response = await fetch(url + "/users");
  const users = await response.json();

  // Generate a new, sequential, unique id number
  const newId = users.length + 1;

  // Se crea un nuevo objeto usuario
  const newUser = {
    id: String(newId),
    first_name: firstName,
    last_name: lastName,
    email: email
  };

  // Send a POST request to the JSON server to add the new user
  const addUserResponse = await fetch(url + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  });

  // Check if the user was added successfully
  if (addUserResponse.ok) {
    console.log(`User added successfully: ${newUser.first_name} ${newUser.last_name}`);
  } else {
    console.error(`Error adding user: ${addUserResponse.status}`);
  }
}