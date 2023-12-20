import { Cart, Products } from "./components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";

export const App = () => {
  return (
    <>
      <FirebaseContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/checkout'} element={<Checkout />} />
              {/* <Route path={'/category/:category'} element={<CategoryFilterComponent />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'*'} element={<NotFound />} />  */}
            </Routes>

          </BrowserRouter>
        </CartContextProvider>
      </FirebaseContextProvider>

    </>
  );
};
