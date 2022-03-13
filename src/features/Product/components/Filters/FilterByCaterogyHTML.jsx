import { Box, Typography } from "@material-ui/core";
import categoryApi from "api/categoryApi";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

FilterByCaterogyHTML.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCaterogyHTML({ onChange }) {
  const [categoryList, setCaterogyList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCaterogyList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCaterogyClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box>
      {categoryList.map((category) => (
        <Box className="item-category">
          <div className="content">
            <div className="text-center">
              <h6
                key={category.id}
                onClick={() => handleCaterogyClick(category)}
              >
                <Typography variant="body2">{category.name}</Typography>
              </h6>
            </div>
          </div>
        </Box>
      ))}
    </Box>
  );
}

export default FilterByCaterogyHTML;
