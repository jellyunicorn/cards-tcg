import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://normalview-us.backendless.app/api/",
});