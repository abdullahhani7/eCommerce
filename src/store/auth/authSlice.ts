import type { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";

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
});

export default authSlice.reducer;
