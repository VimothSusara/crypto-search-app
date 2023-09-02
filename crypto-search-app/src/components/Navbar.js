import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <FaCoins className="icon" />
      <h1>
        {" "}
        Crypto
        <div className="wavy">
          <span className="--i:1">S</span>
          <span className="--i:2">E</span>
          <span className="--i:3">A</span>
          <span className="--i:4">R</span>
          <span className="--i:5">C</span>
          <span className="--i:6">H</span>
        </div>
      </h1>
    </div>
  );
};
