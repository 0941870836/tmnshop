import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  buyProduct: {
    margin: theme.spacing(3, 0),
  },
}));

function BuyProduct() {
  const classes = useStyles();
  return (
    <form>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "250px" }}
        size="large"
        className={classes.buyProduct}
      >
        BUY
      </Button>
    </form>
  );
}

export default BuyProduct;
