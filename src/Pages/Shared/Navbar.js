import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li className="hover:bg-primary active:bg-primary">
        <Link  to="/">Home</Link>
      </li>
      <li className="hover:bg-primary active:bg-primary">
        <Link  to="/products">Products</Link>
      </li>
      
        <li className="hover:bg-primary active:bg-primary">
          <Link  to="/dashboard">Dashboard</Link>
        </li>
     
      <li className="hover:bg-primary active:bg-primary">
        <Link  to="/myportfolio">About Us</Link>
      </li>
      <li className="hover:bg-primary active:bg-primary">
        {user ? (
          <button className="btn btn-ghost font-bold text-primary" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div style={{"font-family": "'Poppins',sans-serif"}} className="navbar bg-base-100 font-link font-semibold">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
            </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case font-bold text-xl"> <span className="text-primary">Scrap &nbsp;</span>  Tools Ltd</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {menuItems}
        </ul>
    </div>
    <div className="navbar-end">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
    </div>
</div>
  );
};

export default Navbar;
