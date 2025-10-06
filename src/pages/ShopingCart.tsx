import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
} from "@store/cart/cartSlice";
import Loading from "@components/feedback/Loading/Loading";

import { Heading } from "@components/common";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";

const ShopingCart = () => {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = (id: number, quantity: number) => {
    dispatch(cartItemChangeQuantity({ id, quantity }));
  };

  return (
    <>
      <Heading>Cart</Heading>
      <Loading loading={loading} error={error}>
        <CartItemList
          products={products}
          changeQuantityHandler={changeQuantityHandler}
        />
        <CartSubtotalPrice />
      </Loading>
    </>
  );
};

export default ShopingCart;
