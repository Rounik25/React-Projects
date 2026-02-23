import "./TrackingPage.css";
import { Header } from "../components/Header/Header";
import { OrderTracking } from "../components/tracking/OrderTracking";
import { useLocation } from "react-router";

export function TrackingPage({cart}) {
    const location = useLocation();
    const { data } = location.state || {};
    console.log(data);
    return (
        <>
            <title>tracking</title>
            <Header cart={cart}/>
            <div className="tracking-page">
                <OrderTracking data={data} />
            </div>
        </>
    );
}