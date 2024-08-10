import axios from "axios";
import { url } from "../../Common/service/Url";

export async function adminSignup(data) {
  const endpointUrl = `${url}/api/auth/adminSignup`;

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
