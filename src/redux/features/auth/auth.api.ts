import type { TUser } from "../../../types/user.type";
import axiosInstance from "../../../utils/axios";

export const createUser = async (data: TUser) => {
  const response = await axiosInstance.post("/users/create-user", data);
  return response.data;
};


export const loginUser = async (data: TUser) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

