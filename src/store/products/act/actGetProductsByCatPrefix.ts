import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TProduct } from "@customTypes/product";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
     return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsByCatPrefix;
