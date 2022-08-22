import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import Loading from "./pages/Loading";



function App() {

  const user = useSelector((state)=>state.user);
  const loading = user.isFetching;
 
  const authRoute = user.currentUser ? (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  ) : (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />}/>
      </Routes>
  );
  return (
    <BrowserRouter>
      {loading ? (<Loading />) : authRoute}
    </BrowserRouter>
  );
}

export default App;
