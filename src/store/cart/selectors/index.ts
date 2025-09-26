import type { RootState } from "../../index";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (acc, current) => acc + current,
      0
    );

    return totalQuantity;
  }
);

export { getCartTotalQuantitySelector };
