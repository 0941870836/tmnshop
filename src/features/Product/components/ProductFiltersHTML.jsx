import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import FilterByCaterogyHTML from "./Filters/FilterByCaterogyHTML";

ProductFiltersHTML.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFiltersHTML({ filters, onChange }) {
  const handleCaterogyChange = (newCaterogyId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      "category.id": newCaterogyId,
    };

    onChange(newFilters);
  };

  return (
    <Box>
      <FilterByCaterogyHTML onChange={handleCaterogyChange} />
    </Box>
  );
}

export default ProductFiltersHTML;
