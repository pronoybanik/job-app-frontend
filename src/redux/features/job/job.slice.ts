import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJobById, getJobById, getJobs, postJobs, updateJobById } from "./job.api";
import type { TJobPosting } from "../../../types/job.type";

interface JobsState {
  jobs: TJobPosting[];
  singleJob: TJobPosting | null;
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  singleJob: null,
  loading: false,
  error: null,
};

export interface TJobFilters {
  searchTerm?: string;
  location?: string;
  contractType?: string;
  limit?: number;
}

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (filters: TJobFilters = {}) => {
    const jobs = await getJobs(filters);
    return jobs.data;
  }
);

export const createJobs = createAsyncThunk("jobs/createJobs", async (data: TJobPosting) => {
  const job = await postJobs(data);
  return job;
});

export const getSingleJob = createAsyncThunk("jobs/getById", async ({ id }: { id: string }) => {
  const job = await getJobById(id);
  return job.data;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, data }: { id: string; data: Partial<TJobPosting> }) => {
    const job = await updateJobById(id, data);
    return job;
  }
);

export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id: string) => {
  await deleteJobById(id);
  return id;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch jobs";
      })

      .addCase(createJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create job";
      })

      .addCase(getSingleJob.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleJob = null;
      })
      .addCase(getSingleJob.fulfilled, (state, action) => {
        state.loading = false;
        state.singleJob = action.payload;
      })
      .addCase(getSingleJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load job";
      })

      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.jobs.findIndex((job) => job._id === action.payload._id);
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update job";
      })

      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete job";
      });
  },
});

export default jobsSlice.reducer;
