import { NavLink } from "react-router-dom";
import HeaderCounter from "./HeaderCounter/HeaderCounter";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";

import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";

import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./styles.module.css";
const { headerContainer, headerLogo, headerLeftBar } = styles;

const Header = () => {
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const CartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span>
          <Badge bg="info">Ecom</Badge>
        </h1>
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
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
