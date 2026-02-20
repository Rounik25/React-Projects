import "./TrackingPage.css";
import { Header } from "../components/Header/Header";
import { OrderTracking } from "../components/tracking/OrderTracking";

export function TrackingPage({cart}) {
    return (
        <>
            <title>tracking</title>
            <Header cart={cart}/>
            <div className="tracking-page">
                <OrderTracking />
            </div>
        </>
    );
}