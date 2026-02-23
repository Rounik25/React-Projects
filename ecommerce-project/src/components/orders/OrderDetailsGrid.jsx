import dayjs from "dayjs";
import { Fragment } from "react";
import { useNavigate } from "react-router";


export function OrderDetailsGrid({order}) {
    const navigate = useNavigate();

    function trackOrder(orderProduct){
        navigate('/tracking',{
            state: {
                data : orderProduct
            }
        })
    }

    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct) => {
                return (
                    <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.product.estimatedDeliveryTimeMs).format("MMMM D")}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <div>
                                <button className="track-package-button button-secondary"
                                    onClick={async () => {
                                        trackOrder(orderProduct);
                                    }}
                                >
                                    Track package
                                </button>
                            </div>
                        </div>
                    </Fragment>
                )
            })

            }

        </div>
    );
}