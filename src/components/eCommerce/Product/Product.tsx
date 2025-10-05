import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import type { TProduct } from "@customTypes/product";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { addToCart } from "@store/cart/cartSlice";
const { product, productImg, maximumNotice } = styles;

const Product = memo(({ id, title, price, img, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounse = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounse);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>
        {quantityReachToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
