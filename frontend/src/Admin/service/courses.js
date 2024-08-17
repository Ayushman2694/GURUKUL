import axios from "axios";
import { url } from "../../Common/service/Url";

export async function addCourse(data) {
  let newUrl = `${url}/api/course/addCourse`;

  try {
    const response = await axios.post(newUrl, data);
    if (response.status === 200) {
      return response.data; // Return the data if needed
    } else {
      console.log("Unexpected status code:", response.status);
      return null;
    }
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 400) {
      const errorMessage = error.response.data.error;
      throw new Error(errorMessage); // Throw the error with the specific message
    } else {
      throw error; // Handle other types of errors
    }
  }
}

export async function showAllCourse() {
  const apiUrl = `${url}/api/course/allCourse`;
  try {
    const response = await axios.get(apiUrl); // Use GET for fetching data

    if (response.status === 200) {
      return response.data; // Assuming response.data contains the array of admin details
    } else {
      console.error("Failed to fetch course information:", response.data.error);
      return null;
    }
  } catch (error) {
    console.error("Error fetching course information:", error);
    throw error;
  }
}

export async function getModuleByCourseId(courseId) {
  const apiUrl = `${url}/api/course/allModules/${courseId}`;

  try {
    const response = await axios.get(apiUrl); // Use GET for fetching data

    if (response.status === 200) {
      return response.data.emp; // Assuming response.data contains the array of admin details
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
