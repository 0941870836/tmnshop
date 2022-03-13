import { Box, Typography } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { formatPrice } from "utils";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div class="products">
      <Box padding={1} onClick={handleClick}>
        <div class="product">
          <Box padding={1} minHeight="215px">
            <img src={thumbnailUrl} alt={product.name} width="100%" />
          </Box>
          <div class="product-bottom">
            <Typography variant="body2">{product.name}</Typography>

            <Typography variant="body2">
              <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                {formatPrice(product.salePrice)}
              </Box>
              {product.promotionPercent > 0
                ? ` -${product.promotionPercent}%`
                : ``}
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Product;
