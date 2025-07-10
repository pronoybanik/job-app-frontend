import type { TJobPosting } from "../../../types/job.type";
import axiosInstance from "../../../utils/axios";
import type { TJobFilters } from "./job.slice";

export const getJobs = async (filters: TJobFilters = {}) => {
  const { searchTerm, location, contractType, limit } = filters;

  const response = await axiosInstance.get("/job", {
    params: {
      ...(searchTerm && { searchTerm }),
      ...(location && { location }),
      ...(contractType && { contractType }),
      ...(limit && { limit }),
    },
  });

  return response.data;
};




export const postJobs = async (data: TJobPosting) => {
  const response = await axiosInstance.post("/job/create-job", data);
  return response.data;
};

export const updateJobById = async (id: string, data: Partial<TJobPosting>) => {
  const res = await axiosInstance.patch(`/job/${id}`, data);
  return res.data;
};

export const getJobById = async (id: string,) => {
  const res = await axiosInstance.get(`/job/${id}`);
  return res.data;
};

export const deleteJobById = async (id: string) => {
  const response = await axiosInstance.delete(`/job/${id}`);
  return response.data;
};




