import "./App.css";

import Hero from "./components/Hero";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ApiComponent from "./example/ApiComponent";
import withLogin from "./hoc/withLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Input from "./example/input";
import { CartProvider } from "./context/CartContext";
function App() {
  //utilizacion del hoc
  const componenteConHoc = withLogin(ApiComponent);
  const ContadorConHoc = withLogin(ItemCount);

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero greeting="Tienda " />
                <ItemListContainer saludar="" />
              </>
            }
          />
          <Route
            path="/category/:type"
            element={
              <>
                <ItemListContainer saludar="Bienvenidos a categorias:" />
              </>
            }
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/api" element={<ApiComponent />} />
          <Route path="/api/:id" element={<ApiComponent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>

      {/* <Fetcountry/>  */}
    </BrowserRouter>
  );
}

export default App;
