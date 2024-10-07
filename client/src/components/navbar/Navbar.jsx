import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const RenderNavLinks = () => {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/aboutPage">About</Link>
        <Link to="/list">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </>
    );
  };

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Artigence HealthCare</span>
        </Link>
      </div>

      <div className="right">
        <div className="navLinks">
          <RenderNavLinks />
        </div>
        
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu Icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <RenderNavLinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
