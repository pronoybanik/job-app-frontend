import type { TApply } from "../../../types/apply.type";
import axiosInstance from "../../../utils/axios";


export const applyForJob = async (data: TApply) => {
  const response = await axiosInstance.post("/apply", data);
  return response.data;
};

export const getAllApplications = async () => {
  const response = await axiosInstance.get("/apply");
  return response.data;
};


