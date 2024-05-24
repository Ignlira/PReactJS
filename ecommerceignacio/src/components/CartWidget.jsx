import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import cart from '../assets/cart.png';

const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <Link to="/cart">
      <img src={cart} alt="Duck Shop" height={24} />
      <span> ({total}) </span>
    </Link>
  );
};

export default CartWidget;