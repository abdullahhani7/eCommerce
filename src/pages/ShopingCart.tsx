import { Heading } from "@components/common";
import { CartItem, CartSubtotalPrice } from "@components/eCommerce";

const ShopingCart = () => {
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
