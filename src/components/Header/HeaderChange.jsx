import { Badge, IconButton, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import { logout } from "features/Auth/components/userSlice";
import { cartItemsCountSelector } from "features/Cart/selectors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 999,
    marginBottom: "20px",
    background: "transparent",
  },

  navBarSolid: {
    color: "#fff",
    backgroundColor: "#000",
  },

  navBarTransparent: {
    width: "100%",
    zIndex: 999,
    top: 0,
    backgroundColor: "transparent",
    color: "#fff",
    transition: "all 0.2s linear",
    transform: "translateY(0)",
  },

  changeNavBar: {
    backgroundColor: "#black",
    color: "fff",
  },
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const isLoggedIn = !!loggedInUser.id;
  const history = useHistory();
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLoggoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  const handleCartClick = () => {
    history.push("/cart");
  };

  const savePrevPage = () => {
    localStorage.setItem("prevPage", JSON.stringify(window.location.pathname));
  };

  return (
    <AppBar className={classes.root}>
      <nav className="navbar navbar-expand-sm">
        <NavLink className="navbar-brand" to="/">
          <h1>TMN-SHOP</h1>
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                PRODUCT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg">
          {!isLoggedIn && (
            <div className="account">
              <NavLink
                className="btn--blue bttn "
                to="/sign-in"
                onClick={savePrevPage}
              >
                SIGN IN
              </NavLink>
              <NavLink className="signup btn--black bttn " to="/sign-up">
                SIGN UP
              </NavLink>
            </div>
          )}

          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemsCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
              <div
                className="name-user"
                style={{ fontSize: "15px", marginLeft: "5px" }}
              >
                {loggedInUser.fullName}
              </div>
            </IconButton>
          )}
        </div>

        <div class="menu">
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            getContentAnchorEl={null}
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
            <MenuItem onClick={handleLoggoutClick}>Logout</MenuItem>
          </Menu>
        </div>
      </nav>
    </AppBar>
  );
}
