import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import CartProvider from "./provider/cart";
import Header from './components/Header';
import Checkout from "./pages/Checkout";

/**
 * cart using provider
 * api to show restuarant list
 *
 * Routes:
 *  / - home
 * /reastaurant/<id> - rest detail page
 *  /cart -
 * /checkout -
 *
 *
 */

function App() {

  const HomeWithHeader = ()=><Header>
    <Home />
  </Header>

  const RestaurantDetailsWithHeader  = ()=><Header>
    <RestaurantDetails/>
  </Header>

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeWithHeader />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailsWithHeader  />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
