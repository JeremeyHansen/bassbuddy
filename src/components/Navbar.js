import "../css/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'

export default function Navbar() {
  //setting state and function for hamburger mobile
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }


  return (
    <nav className="nav">
      <Link to="/" className="nav-title">
        <span className="site-title">BassBuddy</span>
        <span className="period">.</span>
      </Link>
      <ul className="desktop-nav">
        <CustomLink to="/cities">Cities</CustomLink>
        <CustomLink to="/contact">Submit</CustomLink>
      </ul>
      <div onClick={handleOpen} className="hamburger">
        <Hamburger className="hammy"/>
      </div>
      {open && (
        <ul className="mobile-nav" onClick={handleOpen}>
          <CustomLink to="/cities">Cities</CustomLink>
          <CustomLink to="/contact">Submit</CustomLink>
        </ul>
      )}
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "hvr-underline-from-right"}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
