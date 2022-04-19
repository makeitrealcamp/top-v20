const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function handlerCheckout(req, res) {
  const { paymentMethod, amount } = req.body;

  const { id, card } = paymentMethod;

  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Example charge',
    });

    res.json(payment)
  } catch (error) {
    console.log("error", error)
    res.status(500).json(error)
  }

}

module.exports = {
  handlerCheckout,
}
