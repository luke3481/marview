import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar_styles/Dropdown.css";

function ProfileMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { logout } = useAuth0();

  return (
    <>
      <section className="drop-section">
        <ul
          onClick={handleClick}
          className={click ? "drop-menu" : "dropdown-menu"}
        >
          <li>
            <Link
              className="menu-items"
              to="/profile"
              onClick={() => setClick(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="menu-items"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default ProfileMenu;
