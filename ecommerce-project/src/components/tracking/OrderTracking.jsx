import { Link } from "react-router";
import { ProgressLabelsContainer } from "./ProgressLabelsContainer";

export function OrderTracking() {
    return (
        <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
                View all orders
            </Link>

            <div className="delivery-date">
                Arriving on Monday, June 13
            </div>

            <div className="product-info">
                Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className="product-info">
                Quantity: 1
            </div>

            <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

            <ProgressLabelsContainer />

            <div className="progress-bar-container">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
}