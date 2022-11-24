import { Navigate, Route, Routes } from "react-router-dom";

// MUI
import { ThemeProvider } from "@mui/material";
import { theme } from "./frontEnd/mui/theme";
// Redux
import { Provider } from "react-redux";
import { store } from "./frontEnd/redux/store";
// Components
import Products from "./frontEnd/components/Products";
import CartContainer from "./frontEnd/components/cart/CartContainer";
import ProductDetails from "./frontEnd/components/product/ProductDetails";

function AppContainer() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/cart" element={<CartContainer />} />
          <Route path="/Products/:id" element={<ProductDetails />} />

          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default AppContainer;
