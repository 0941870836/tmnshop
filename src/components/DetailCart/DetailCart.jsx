import ItemOfUser from "components/ItemOfUser/ItemOfUser";
import React from "react";
import BillCart from "./BillCart";

function DetailCart() {
  return (
    <section className="detail-cart">
      <div className="row">
        <div className="list-cart">
          <div className="content">
            <div className="header-list-cart">
              <p>SẢN PHẨM</p>
              <p>ĐƠN GIÁ</p>
              <p>SỐ LƯỢNG</p>
              <p>THÀNH TIỀN</p>
            </div>
            <div className="mct-list-cart">
              <ItemOfUser />
            </div>
          </div>
        </div>
        <div className="bill">
          <BillCart />
        </div>
      </div>
    </section>
  );
}

export default DetailCart;
