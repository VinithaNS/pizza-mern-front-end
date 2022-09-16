import Button from '@mui/material/Button';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { placeOrder } from '../actions/orderActions';
import Navbar from '../components/navbar/Navbar';
function Checkout() {

  const userState = useSelector(state=>state.loginUserReducer);
  const {currentUser} = userState;
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [shippingAddress, setShippingAddress] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function orderHandler() {

    if(name === '' || email === '') {
        alert('Fields is empty!')
    } else {
      const { data } = axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/orders/placeorders`,
        {
          name: name,
          email: email
        },
        
        localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress))
       
      );
        
        console.log(data);
        dispatch(placeOrder(data));
        navigate('/orders');
      }
     
    }   
  return (
    <div className='form-container'>
        <Navbar />
        <div className="form-row">
            <div className="form-col">
                
                <div className="form">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Full Name'/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='E-mail' />
                    <textarea name="Address" required value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} id="" cols="30" rows="10" placeholder='Address'></textarea>
                    <Button className='form-btn' onClick={orderHandler}>Order</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
