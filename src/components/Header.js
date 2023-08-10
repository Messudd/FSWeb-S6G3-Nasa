import React from "react";
import "./../style/header.css";

function Header({tema}) {

  return (
    <header>
      <nav className="navbar">
        <h1 style={{ ...tema, color: "whitesmoke" }}>
          <span>Nasa</span>Fotoğraflar<span>|</span>Sergisi
        </h1>
      </nav>
    </header>
  );
}

export default Header;