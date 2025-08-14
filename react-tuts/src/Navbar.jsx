// components/Navbar.js
import React from 'react';

// 🔹 Reusable Navbar component (props demo)
function Navbar({ title }) {
  return (
    <nav>
      <h2>{title}</h2>
    </nav>
  );
}

export default Navbar;