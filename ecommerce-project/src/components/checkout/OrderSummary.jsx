import { CartItemContainer } from "./CartItemContainer";


export function OrderSummary({deliveryOptions, cart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                .find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                });

                return (
                    
                    <CartItemContainer 
                        key={selectedDeliveryOption.id}
                        selectedDeliveryOption={selectedDeliveryOption} 
                        cartItem={cartItem} 
                        deliveryOptions={deliveryOptions} 
                    />
                );
            })}

        </div>
    );
}