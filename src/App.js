import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products></Products>} />
        <Route
          path="/purchase/:id"
          element={
              <Purchase></Purchase>    
          }
        ></Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
