import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import CategoryPage from "../Pages/CategoryPage";
import SearchPage from "../Pages/SearchPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";

const router = createBrowserRouter([
{
    path: "/",
    Component: MainLayout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: "search",
            Component: SearchPage
        },
        {
            path: "cart",
            Component: CartPage
        },
        {
            path: "checkout",
            Component: CheckoutPage
        },
        {
            path: "category/:categorySlug",
            Component: CategoryPage
        },
        {
            path: "category/:categorySlug/:productSlug",
            Component: CategoryPage
        },
        {
            path: "product/:categorySlug/:productSlug",
            Component: ProductDetailsPage
        }
    ]
}

]);

export default router;
