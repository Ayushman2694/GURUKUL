import axios from "axios";
import { url } from "../../Common/service/Url";

export async function employeeSignup(data) {
  const endpointUrl = `${url}/api/auth/employeeSignup`;

  try {
    const response = await axios.post(endpointUrl, data);

    if (response.status === 200) {
      return response.data; // Return the data if needed
    } else {
      console.log("Unexpected status code:", response.status);
      return null;
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const errorMessage = error.response.data.error;
      throw new Error(errorMessage); // Throw the error with the specific message
    } else {
      throw error; // Handle other types of errors
    }
  }
}

export async function showAllEmployee() {
  const apiUrl = `${url}/api/employee/allEmployee`;

  try {
    const response = await axios.get(apiUrl); // Use GET for fetching data

    if (response.status === 200) {
      return response.data; // Assuming response.data contains the array of admin details
    } else {
      console.error(
        "Failed to fetch employee information:",
        response.data.error
      );
      return null;
    }
  } catch (error) {
    console.error("Error fetching employee information:", error);
    throw error;
  }
}

export async function removeEmployee(data) {
  let newUrl = `${url}/api/employee/deleteEmployee`;

  await axios
    .post(newUrl, data)
    .then((res) => {
      if (res.status === 200) {
        return data;
      }
    })
    .catch((error) => {
      console.error("Delete Employee error:", error);
      throw error;
    });
}