const stripe = Stripe('pk_test_51RFaRBQaVanYEqYDvJxeVdA0clmJhOhwh4z9KygOiOJ9kCCGHmRRPLiajEdA1ZfeYE1xG4tiKev8qtJ7XaHc4PHL003jp66Uy2');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});