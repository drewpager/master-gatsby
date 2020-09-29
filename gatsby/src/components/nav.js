import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Ones</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slice Masters</Link>
        </li>
        <li>
          <Link to="/orders">Order Now</Link>
        </li>
      </ul>
    </nav>
  );
}
