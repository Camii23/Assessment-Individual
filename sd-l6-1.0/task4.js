// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

export async function delUser(id) {
  // Get the URL of the user to delete
  const url = getServerURL() + "/users/" + id;

  // Send a DELETE request to the JSON server to delete the user
  const response = await fetch(url, {
    method: "DELETE"
  });

  // Return a boolean indicating whether the user was deleted successfully
  return response.ok;
}