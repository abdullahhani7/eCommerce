import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@services/api";
import axiosErrorHandler from "@util/axiosErrorHandler";
import type { RootState } from "@store/index";
import type { TOrderItem } from "@customTypes/order.type";

type TResponse = TOrderItem[];

const actGetOrders = createAsyncThunk(
  "orders/actGetOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const res = await api.get<TResponse>(`/orders?userId=${auth.user?.id}`, {
        signal,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetOrders;
