import CartItem from "../CartItem/CartItem";
import type { TProduct } from "@customTypes/product";

type CartItemsListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
};

const CartItemList = ({
  products,
  changeQuantityHandler,
}: CartItemsListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemList;
