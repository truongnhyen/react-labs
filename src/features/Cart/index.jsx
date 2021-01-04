import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import { cartItemsSelector, itemsCountSelector, totalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItems = useSelector(cartItemsSelector); //cartItemsSelector da duoc dinh nghia trong file selectors
  const totalAmount = useSelector(totalSelector);
  const itemsCount = useSelector(itemsCountSelector);

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
  console.log('Cart Items', itemsCount, cartItems);
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
