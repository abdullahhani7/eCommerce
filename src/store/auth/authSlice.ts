import type { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";

interface IAuthState {
  loading: TLoading;
  error: null | string;
}

const initialState: IAuthState = {
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default authSlice.reducer;
