import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "utils";
import {
  cartItemsCountSelector,
  cartTotalSelector,
} from "../../features/Cart/selectors";

function BillCart() {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  return (
    <section className="bill-cart">
      <h3 className="text-center">THÔNG TIN ĐƠN HÀNG</h3>
      <div className="d-flex justify-content-between so-luong">
        <p>Số lượng: </p>
        <p className="fee">{cartItemsCount} sản phẩm</p>
      </div>
      <div className="d-flex justify-content-between total">
        <p>Tổng tiền: </p>
        <p className="fee">{formatPrice(cartTotal)}</p>
      </div>
      <Button className="btn--blue">TIẾN HÀNH THANH TOÁN</Button>
    </section>
  );
}

export default BillCart;
