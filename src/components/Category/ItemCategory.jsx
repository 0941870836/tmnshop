import ProductFilters from "features/Product/components/ProductFilters";
import React from "react";
import { useMemo } from "react";
import queryString from "query-string";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import ProductFiltersHTML from "features/Product/components/ProductFiltersHTML";
import { Box } from "@material-ui/core";

function Category(props) {
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);

  const handleFiltersChange = (newFilters) => {
    const filters = { ...queryParams, ...newFilters };

    history.push({
      pathname: "/products",
      search: queryString.stringify(filters),
    });
  };
  return (
    <ProductFiltersHTML filters={queryParams} onChange={handleFiltersChange} />
  );
}

export default Category;
