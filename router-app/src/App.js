import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Admin from "./Components/DynamicRoute/Admin";
import User from "./Components/DynamicRoute/User";
import UserDetails from "./Components/DynamicRoute/UserDetails";
import FeaturedProdut from "./Components/FeaturedProdut";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewProduct from "./Components/NewProduct";
import NoMatch from "./Components/NoMatch";
import OrederSummary from "./Components/OrederSummary";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrederSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProdut />} />
          <Route path="featured" element={<FeaturedProdut />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="user" element={<User />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* <Route path='user/1' element={<UserDetails/>} />
      <Route path='user/2' element={<UserDetails/>} />
      <Route path='user/3' element={<UserDetails/>} /> */}

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
