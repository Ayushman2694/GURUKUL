import axios from "axios";
import { url } from "../../Common/service/Url";

export async function adminSignup(data) {
  const endpointUrl = `${url}/api/auth/adminSignup`; // Adjust the endpoint URL as needed

  try {
    const response = await axios.post(endpointUrl, data);

    if (response.status === 200) {
      return response.data; // Return the data if needed
    } else {
      return null; // Return null or handle the error as needed
    }
  } catch (error) {
    console.log("error found", error.message);
    throw error; // Return null or handle the error as needed
  }
}
