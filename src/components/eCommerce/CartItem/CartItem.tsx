import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

const CartItem = () => {
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img
            src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:9f660133-3497-480e-a693-24e87745e856/as/EID-414c805bab93a20c92362f7a1c20555cb933e82e.jpg?width=450&height=675&preferwebp=true"
            alt="title"
          />
        </div>
        <div className={productInfo}>
          <h2>test</h2>
          <h3>30 EGP</h3>
          <Button
            variant="secondary"
            style={{ color: "white", width:"100px" }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default CartItem;