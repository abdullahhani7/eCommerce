import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

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

    return () => clearInterval(debounce);
  }, [totalQuantity]);

  return (
    <div>
      <div className={basketContainer}>
        <Logo title="logo" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
    </div>
  );
};

export default HeaderBascket;
