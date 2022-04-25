import React, { useEffect, useState, useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import productApi from "api/productApi";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useHistory } from "react-router-dom";
import categoryApi from "api/categoryApi";

const Search = () => {
  const [categoryList, setCaterogyList] = useState([]);
  const history = useHistory();

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
  const [keyword, setKeyword] = useState("");

  const searchHandler = (category) => {
    category.preventDefault();

    if (keyword.trim()) {
      history.push(`/products/${category.id}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={searchHandler}>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Enter Product Name..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="input-group-append">
          <button id="search-btn" className="btn">
            <SearchOutlinedIcon />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
