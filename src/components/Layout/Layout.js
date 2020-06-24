import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const Layout = (props) => (
  // <React.Fragment></React.Fragment>
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
