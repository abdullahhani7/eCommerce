import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "@store/index";

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
  }
);

export default actGetProductsByItems;
