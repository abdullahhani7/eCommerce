import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

const HeaderBascket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div>
      <div className={basketContainer}>
        <div className={basketCart}>
          <Logo title="logo" />
          <div className={quantityStyle}>{totalQuantity}</div>
        </div>
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default HeaderBascket;
