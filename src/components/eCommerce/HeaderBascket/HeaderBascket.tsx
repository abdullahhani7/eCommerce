import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBascket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

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
