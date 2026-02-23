import "./CheckoutPage.css";
import "../components/checkout/checkout-header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "../components/checkout/OrderSummary";
import { PaymentSummary } from "../components/checkout/PaymentSummary";
import { CheckoutHeader } from "../components/checkout/CheckoutHeader";

export function CheckoutPage({ cart , loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    
    useEffect(() => {
        const fetchCheckoutData = async () =>{
            let response = await axios.get ('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);

            response =  await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        };
        fetchCheckoutData();
    },[cart]);

    
    return (
        <>

            <title>Checkout</title>

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">

                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />
                    
                    <PaymentSummary paymentSummary={paymentSummary} />
                    
                </div>
            </div>
        </>
    );
}