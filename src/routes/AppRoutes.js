import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ViewCart from "../components/ViewCart";
import ShippingForm from "../components/Forms/Shipping";
import Payment from "../components/Forms/Payment";
import Billing from "../components/Forms/Billing";
import Confirmation from "../components/Forms/Confirmation";
import Checkout from "../components/Forms/Checkout";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/viewcart",
        element: <ViewCart />
    }
]);

export default AppRoutes;