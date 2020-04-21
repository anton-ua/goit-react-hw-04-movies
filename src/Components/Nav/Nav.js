import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

export default class Nav extends Component {
  state = {};
  render() {
    return (
      <header>
        {" "}
        <div className={styles.container}>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                exact
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
