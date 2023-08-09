const express=require('express')
const router=express.Router()
require("dotenv").config()

const Stripe=require('stripe')
const stripe=Stripe('sk_test_51NZZjuSBC0DFpuI22WdxTRkbOTJo0oZDughNiFUObxcQybnwwVvPzeOC0aL8aJY7ViWoQHFkjAvez7NJNXcMEPO0005mny9xgT')

router.post('/create-checkout-session', async (req, res) => {
    const amount=req.body.amount;
   console.log(amount)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Donation',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
  
    res.send({url:session.url});
  });

  module.exports=router