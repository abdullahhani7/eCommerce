import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBascket = () => {
  return (
    <div>
      <div className={basketContainer}>
        <Logo title="logo" />
        <div className={basketQuantity}>0</div>
      </div>
    </div>
  );
};

export default HeaderBascket;
