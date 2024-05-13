import React, { useState } from "react";
import styles from "./page.module.css";
import { Menu } from "react-feather";
import { Link, Outlet } from "react-router-dom";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div className={styles.nav}>
        <span onClick={handleMenuClick}>
          <Menu />
        </span>
        <h3>Uplift India Global</h3>
      </div>
      <aside className={isSidebarOpen ? styles.drawerOpen : ""}>
        <ul>
          <li>
            <Link to="/">Our Impact</Link>
          </li>
          <li>
            <Link to="/why-us">Why Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li className={styles.hasSubmenus}>
            <div>Programs</div>
            <>
              <li>
                <Link to="/aqua-assist">AquaAssist</Link>
              </li>
              <li>
                <Link to="/empowher">EmpowHer</Link>
              </li>
            </>
          </li>
        </ul>
      </aside>
      <main className={isSidebarOpen ? styles.mainOpen : ""}>
        <Outlet />
      </main>
    </div>
  );
}
