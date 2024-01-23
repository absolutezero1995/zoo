import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({setIsAuth, isAuth}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
      });
      if (response.ok) {
        console.log("Logout successful");
        navigate("/");
        setIsAuth(false);
      } else {
        const errorData = await response.json();
        setError(`Logout failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setError("An error occurred during logout.");
    }
  };

  useEffect(() => {
    void fetch("http://localhost:3000/api/check", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => isAuth(data));
  }, []);

 
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/game">GAME</NavLink>
          </li>
          {isAuth ? (
            <li>
              <button onClick={handleLogOut}>LOG OUT</button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/signin">SIGN IN</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SIGN UP</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
