import React  from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import MoneyOutlinedIcon from '@mui/icons-material/MoneyOutlined';
import Button from '@mui/material/Button';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, deleteItem } from '../actions/cartActions';
import Navbar from '../components/navbar/Navbar';
import './cart.css';
const Cart = () => {

    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems

    const navigate = useNavigate();

    var totalPrice = cartItems.reduce((x, item) => x + item.price, 0);

    const dispatch = useDispatch();


   function checkoutHandler() {
        if(totalPrice > 0) {
            navigate('/checkoutdetails')
        }
    }
  return (
      <div className='cart-container'>
          <div className='cart-row'>
              <Navbar/>
          </div>
          <div className='cart-row'>
              <h1 className='cart-title'>Your Cart</h1>
          </div>
          <div className='cart-row'>
              {cartItems.map((item) => (
                 
                  <div className='cart-card'>
                      <div className='card-header'>
                          <h2 className='cart-subTitle'>{item.name}</h2>
                          <span className='cart-varient'>{item.variant}</span>
                     </div>
                      <div className='cart-body'>
                         <img src={item.image} alt={item.name}/>
                      </div>
                      <div className='cart-footer'>
                          <div className='cart-footer-top'>
                              <p className='cart-price'>Price : {item.quantity}
                             * {(item.prices[0][item.variant])}= $ {(item.price.toFixed(2))}
                              </p>
                          </div>
                           <div className='cart-footer-bottom'>
                              <div className='cart-footer-bottom-left'>
                                <DeleteOutlineOutlinedIcon onClick={() => {dispatch(deleteItem(item))}}/>
                              </div>
                              <div className='cart-footer-bottom-right'>
                                  <p>
                                    Quantity:
                                      <AddCircleIcon onClick={() => {dispatch(addToCart(item, item.quantity+1, item.variant ))}}/>
                                      <span className='quantity'>{item.quantity}</span>
                                      <RemoveCircleOutlinedIcon onClick={() => {dispatch(addToCart(item, item.quantity-1, item.variant ))}}/>
                                   </p>
                              </div>
                          </div>
                      </div>
                  </div>
             ))}
              <div className='cart-col'>
                  <div className='cartTotal'>
                      <h2 className='totalprice'>Total Price : ${(totalPrice).toFixed(2)}</h2>
                      <Button variant='contained' onClick={checkoutHandler}> <MoneyOutlinedIcon/>Checkout</Button>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Cart
