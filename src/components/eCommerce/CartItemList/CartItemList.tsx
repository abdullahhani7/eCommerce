import CartItem from "../CartItem/CartItem";
import type { TProduct } from "@customTypes/product";

type CartItemsListProps = { products: TProduct[] };

const CartItemList = ({ products }: CartItemsListProps) => {
  const renderList = products.map((el) => <CartItem key={el.id} {...el} />);
  return <div>{renderList}</div>;
};

export default CartItemList;
