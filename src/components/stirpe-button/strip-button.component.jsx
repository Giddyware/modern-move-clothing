import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('Payement Succesful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; 
  const publishableKey =
    'pk_test_51J9VlIEfPZUDCJ6t9j3LC7qs9yZS1BbOegP7bpJb03CKMvMo7F9Z4fhZGEUVtuIXEzCAUTQqiU0wjFb0vbFR73PC00Gdvz4zte';
  return (
    <StripeCheckout
      label="Pay Now"
      name="Modern Move Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your price value is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
