import React from "react";
import PropTypes from "prop-types";
import { Box, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

ProductMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: theme.spacing(2, 4),
    },

    "& > li > a": {
      color: theme.palette.grey[700],
    },
    "& > li > a.active": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      fontWeight: "bold",
    },
  },
}));

function ProductMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  return (
    <div>
      <Box component="ul" className={classes.root}>
        <li>
          <Link component={NavLink} to={url} exact>
            Decription
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${url}/additional`} exact>
            Additional Information
          </Link>
        </li>
        <li>
          <Link component={NavLink} to={`${url}/reviews`} exact>
            Reviews
          </Link>
        </li>
      </Box>
    </div>
  );
}

export default ProductMenu;
