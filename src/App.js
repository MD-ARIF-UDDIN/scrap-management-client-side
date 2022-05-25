import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Purchase from "./Pages/Purchase/Purchase";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Products from "./Pages/Products/Products";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Footer from "./Pages/Shared/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrders from "./Pages/Dashboard/MyOrders";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products></Products>} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
