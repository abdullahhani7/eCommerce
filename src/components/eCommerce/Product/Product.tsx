import { useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import type { TProduct } from "@customTypes/product";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { addToCart } from "@store/cart/cartSlice";
const { product, productImg } = styles;

const Product = ({ id, title, price, img }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

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
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
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
};

export default Product;
