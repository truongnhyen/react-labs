import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    const action = addToCart({
      product: {
        id: 1,
        name: 'Áo Thun',
        price: '50000',
      },
      quantity: 1,
    });
    dispatch(action);
  };
  console.log('Cart Items', cartItems);
  return (
    <Container>
      <Typography variant="h2">Your Cart</Typography>
      <Typography variant="body1">Total: {totalAmount}</Typography>

      <Button variant="contained" onClick={handleAddToCartClick}>
        Add To Cart
      </Button>
    </Container>
  );
}

export default CartFeature;
