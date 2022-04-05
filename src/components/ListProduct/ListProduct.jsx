import productApi from "api/productApi";
import ProductListHtml from "features/Product/components/ProductListHtml";
import ProductSkeletonList from "features/Product/components/ProductSkeletonList";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { DoubleArrow } from "@material-ui/icons";

function Listproduct() {
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _limit: Number.parseInt(params._limit) || 8,
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll(queryParams);
        setProductList(data);

        console.log({ data });
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }

      setLoading(false);
    })();
  }, []);
  return (
    <section className="list-product">
      <h3 className="title">Our Top products</h3>

      <div className="lc-main-content">
        <div className="lc-content">
          {loading ? (
            <ProductSkeletonList length={6} />
          ) : (
            <ProductListHtml data={productList} />
          )}
        </div>
        <div className="product-all">
          <a href="/products" class="btn-icon">
            <span class="btn-content">XEM TẤT CẢ</span>
            <span class="icon">
              <DoubleArrow class="arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Listproduct;
