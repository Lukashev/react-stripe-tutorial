import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Payment from "../components/Payment"

const stripePromise = loadStripe("pk_test_SJ0TzAtO8ehAKlP1nHlnVpZc")

const Index = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  )
}

export default Index
