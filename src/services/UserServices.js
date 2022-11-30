import Axios from "./axios";
function FetchAllUser(num) {
  return Axios.get(`/api/users?page=${num}`)
}

export { FetchAllUser };
