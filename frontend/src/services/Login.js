import axios from "axios";
import { url } from "./Url";

export async function employeInfo() {
  const Url = `${url}/api/auth/login`; // Replace with your actual endpoint

  try {
    const response = await axios.get(Url);
    confirm.log(response);
    if (response.status === 200) {
      console.log("Employee information fetched successfully:", response.data);
      console.log(response.data);
      return response.data; // You can return the data if needed
    } else {
      console.error(
        "Failed to fetch employee information:",
        response.data.error
      );
      return null; // Return null or handle the error as needed
    }
  } catch (error) {
    console.error("Error fetching employee information:", error);
    return null; // Return null or handle the error as needed
  }
}
