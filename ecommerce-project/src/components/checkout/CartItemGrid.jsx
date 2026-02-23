import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";

export function CartItemGrid({deliveryOptions,cartItem,loadCart}) {
    return (
        <div className="cart-item-details-grid">
            <img className="product-image"
                src={cartItem.product.image} />

            <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

            <DeliveryOptions 
                deliveryOptions={deliveryOptions} 
                cartItem={cartItem}
                loadCart={loadCart} 
            />
            
        </div>
    );
}