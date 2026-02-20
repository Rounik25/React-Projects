import "./CheckoutPage.css";
import "../components/checkout/checkout-header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "../components/checkout/OrderSummary";
import { PaymentSummary } from "../components/checkout/PaymentSummary";
import { CheckoutHeader } from "../components/checkout/CheckoutHeader";


export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
            .then((response) => {
                setDeliveryOptions(response.data);
            })
    }, [])
    useEffect(() => {
        axios.get("/api/payment-summary")
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, [])
    return (
        <>

            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">

                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
                    
                    <PaymentSummary paymentSummary={paymentSummary} />
                    
                </div>
            </div>
        </>
    );
}