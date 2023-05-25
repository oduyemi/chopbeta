import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";






const Navigation = () => {
    const productsInCart = useSelector(cartProducts);
    return(
        <BrowserRouter>
            <Header cartCount={productsInCart ? productsInCart.length : 0} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;