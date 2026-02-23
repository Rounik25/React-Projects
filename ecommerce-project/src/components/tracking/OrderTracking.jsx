import { Link } from "react-router";
import { ProgressLabelsContainer } from "./ProgressLabelsContainer";
import dayjs from "dayjs";

export function OrderTracking({data}) {
    return (
        <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
                View All Orders
            </Link>

            <div className="delivery-date">
                Arriving on {data ? dayjs(data.estimatedDeliveryTimeMs).format('dddd, MMMM D') : "-"}
            </div>

            <div className="product-info">
                {data ? data.product.name : ""}
            </div>

            <div className="product-info">
                Quantity: {data ? data.quantity : ""}
            </div>

            <img className="product-image" src={data ? data.product.image : ""} />

            <ProgressLabelsContainer />

            <div className="progress-bar-container">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
}