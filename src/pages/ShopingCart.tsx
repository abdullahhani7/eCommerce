import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByItems } from "@store/cart/cartSlice";

import { Heading } from "@components/common";
import { CartItem, CartSubtotalPrice } from "@components/eCommerce";

const ShopingCart = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  return (
    <>
      <Heading>Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubtotalPrice />
    </>
  );
};

export default ShopingCart;
