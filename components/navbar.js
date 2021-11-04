import React from "react";
import Link from "next/link";
import cx from 'classnames';

export default function Navbar() {
  const  [isMenuOpen, setMenuOpen] = React.useState(false);
  
  const handleClick = () => {
    setMenuOpen(!isMenuOpen)
  }
  
  const navBarMenuClass = cx({
    'navbar-menu': true,
    'is-active': isMenuOpen
  });

  return (
    <nav
      className="navbar has-background-light mt-3 mb-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            IMDb Charts
          </a>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleClick}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      
    </nav>
  );
}
