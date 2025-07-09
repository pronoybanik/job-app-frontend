import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, postJobs } from "./auth.api";

interface Job {
  id: number;
  title: string;
  description: string;
  // add more fields as needed
}

interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
export const createJobs = createAsyncThunk("jobs/createJobs", async (data) => {
  const jobs = await postJobs(data);
  return jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // fetchJobs
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
      });

    // createJobs
    builder
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
      });
  },
});

export default jobsSlice.reducer;
