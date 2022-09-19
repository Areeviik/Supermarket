import axios from "axios";

const API_URL = "http://localhost:9000/";


const getUserBoard = () => {
  return axios.get(API_URL + "api/me");
};


const UserService = {
  getUserBoard,
}

export default UserService;
