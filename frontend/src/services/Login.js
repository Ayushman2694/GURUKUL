/* eslint-disable no-unused-vars */
import axios from "axios";
import { url } from "./Url";

export async function login(data) {
  let newUrl = `${url}/api/auth/login`;

  const info = await axios
    .post(newUrl, data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        return data;
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
}

export async function Adminlogin(data) {
  let newUrl = `${url}/api/auth/admin`;

  const info = await axios
    .post(newUrl, data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        console.log(data);
        return data;
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
}

export async function Logout() {
  const logOut = () => {
    localStorage.removeItem("token");
  };
}
