import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
});
console.log("Axios baseURL:", axiosPublic.defaults.baseURL);

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
