import type { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";

type CartSubtotalPriceProps = { products: TProduct[] };

const CartSubtotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const subtotal = products.reduce((acc, element) => {
    const price = element.price;
    const quantity = element.quantity;
    if (quantity && typeof quantity === "number") {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subtotal.toFixed(2)}</span>
    </div>
  );
};

export default CartSubtotalPrice;
