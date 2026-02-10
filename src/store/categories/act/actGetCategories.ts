import { api } from "@services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TCategory } from "@customTypes/category";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const response = await api.get<TResponse>("/categories", { signal });
      // console.log("response.data",response);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCategories;
