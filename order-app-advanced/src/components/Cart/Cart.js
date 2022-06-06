import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(true)
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [serverError, setServerError] = useState(null)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)

    try {
      
      const response = await fetch('https://reactrefres-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
        method: 'POST',
        body: JSON.stringify({user: userData, orderedItems: cartCtx.items}),
      })

      if(!response.ok) {
        throw new Error('Something went wrong!!!')
      }

    } catch(err){
      console.log(err, 'submit order handler error')
      setServerError(err.message)
    }
    

    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearAllItems()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>x
        Close
      </button>
      {/* {hasItems && <button className={classes.button} onClick={null}>Order</button>} */}
    </div>
  )

  const cartModalContent =  ( 
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? <Checkout onConfirm={submitOrderHandler} onClose={props.onClose} isHasItems={hasItems} /> : modalActions}
    </>
  )

  const submittingContent = (
    <p>
      Sending order data...
    </p>
  )

  
  const didSubmitContent = (
    <>
      <p> Successfuly sent to order! </p>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>x
          Close
        </button>
      </div>
     
    </>
  )

  if(serverError){
    return(
      <Modal onClose={props.onClose}>
        {serverError}
      </Modal>
    )
  }
  
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !serverError && submittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
