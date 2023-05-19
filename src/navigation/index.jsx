import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";






const Navigation = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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