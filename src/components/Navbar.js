import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container flex">
        <h1>
          <Link to="/">Bookstore CMS</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
export default Navbar;
