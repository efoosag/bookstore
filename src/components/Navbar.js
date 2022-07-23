import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRegUserCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="container flex">
      <div className="brandContainer">
        <h1 className="brand">
          <Link to="/" className="brandText">
            Bookstore CMS
          </Link>
        </h1>

        <ul className="linkContainer">
          <li>
            <Link to="/" className="link">
              Books
            </Link>
          </li>
          <li>
            <Link to="/Categories" className="link">
              Categories
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/">
          <FaRegUserCircle className="icon" />
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
