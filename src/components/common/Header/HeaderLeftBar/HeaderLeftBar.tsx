import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import styles from "./styles.module.css";
const { headerLeftBar } = styles;

const HeaderLeftBar = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const CartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  return (
    <div className={headerLeftBar}>
      <HeaderCounter
        to="wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="wishlist" />}
        title="Wislist"
      />
      <HeaderCounter
        to="cart"
        totalQuantity={CartTotalQuantity}
        svgIcon={<CartIcon title="cart" />}
        title="Cart"
      />
    </div>
  );
};

export default HeaderLeftBar;
