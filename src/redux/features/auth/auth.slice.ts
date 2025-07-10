import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { TAuthState, TAuthUser, TUser } from "../../../types/user.type";
import { createUser, getCurrentUser, loginUser } from "./auth.api";

// Initial state
const initialState: TAuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Thunks
export const createUserThunk = createAsyncThunk(
  "user/createUser",
  async (data: TUser, { rejectWithValue }) => {
    try {
      const user = await createUser(data);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "user/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getCurrentUser();
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async (data: TUser, { rejectWithValue }) => {
    try {
      const user = await loginUser(data);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    // Create User
    builder.addCase(createUserThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(createUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Login User
    builder.addCase(loginUserThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

// Actions
export const { setUser, logout } = authSlice.actions;

// Reducer
export default authSlice.reducer;

// Selectors
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState): TAuthUser | null => state.auth.user;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

