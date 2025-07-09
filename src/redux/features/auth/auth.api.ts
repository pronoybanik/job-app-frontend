import axiosInstance from "../../../utils/axios";

export const getJobs = async () => {
  const response = await axiosInstance.get("/job");
  return response.data;
};

export const postJobs = async (data) => {
  const response = await axiosInstance.post("/job/create-job", data);
  return response.data;
};

