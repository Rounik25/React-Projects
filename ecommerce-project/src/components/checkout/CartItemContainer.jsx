import dayjs from "dayjs";
import { CartItemGrid } from "./CartItemGrid";

export function CartItemContainer({selectedDeliveryOption,cartItem,deliveryOptions}) {
    return (
        <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <CartItemGrid 
                deliveryOptions={deliveryOptions} 
                cartItem={cartItem} 
            />
        </div>
    );
}