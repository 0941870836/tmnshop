import { Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import ProductHtml from "./ProductHtml";

ProductListHtml.propTypes = {
  length: PropTypes.array,
};

ProductListHtml.defaultProps = {
  data: [],
};

function ProductListHtml({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductHtml product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductListHtml;
