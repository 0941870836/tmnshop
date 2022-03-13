import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import FilterByCaterogy from "./Filters/FilterByCaterogy";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCaterogyChange = (newCaterogyId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      "category.id": newCaterogyId,
    };

    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <Box>
      <FilterByCaterogy onChange={handleCaterogyChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
