/* 
    * install stripe from stripe docs
    * stripe account open
    * get publishanle key
    * Create Elements wrapper using publishable key from "react stripe js" 
        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
    *  Create checkout form using card element, useStripe, useElements
    *  get card elements info (credit carf info)
    * ---------------
    * get credit card info and validation
    * // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    * get client secret from backend via payment intent post api
    * store client secret on the client site
*/