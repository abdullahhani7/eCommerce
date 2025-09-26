import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBascket = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = Object.values(cartItems).reduce(
    (acc, current) => acc + current,
    0
  );
  console.log(totalQuantity);

  return (
    <div>
      <div className={basketContainer}>
        <Logo title="logo" />
        <div className={basketQuantity}>{totalQuantity}</div>
      </div>
    </div>
  );
};

export default HeaderBascket;
