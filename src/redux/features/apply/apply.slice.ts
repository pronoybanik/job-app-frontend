import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  applyForJob,
  getAllApplications,

} from "./apply.api";
import type { TApply } from "../../../types/apply.type";

type TApplyState = {
  applications: TApply[];
  selectedApplication: TApply | null;
  loading: boolean;
  error: string | null;
};

const initialState: TApplyState = {
  applications: [],
  selectedApplication: null,
  loading: false,
  error: null,
};

// Thunks
export const createApplicationThunk = createAsyncThunk(
  "apply/create",
  async (data: TApply, { rejectWithValue }) => {
    try {
      const res = await applyForJob(data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const getAllApplicationsThunk = createAsyncThunk(
  "apply/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllApplications();
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);



// Slice
const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create
      .addCase(createApplicationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApplicationThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })
      .addCase(createApplicationThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get All
      .addCase(getAllApplicationsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllApplicationsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(getAllApplicationsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

     
  },
});

export default applySlice.reducer;
