import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-user?id=${inputId}`);
};

const createNewUserService = (data) => {
  console.log("check data", data);
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (useId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: useId,
    },
  });
};
export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService };
