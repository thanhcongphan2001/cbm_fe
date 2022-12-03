import Axios from "../api/axios";

export const FetchAllUser = (num) => {
  return Axios.get(`/api/users?page=${num}`);
};


