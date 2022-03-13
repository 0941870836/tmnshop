import { Delete } from "@material-ui/icons";
import { STATIC_HOST } from "constants/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "utils";
import { removeFromCart } from "features/Cart/cartSlice";
import QuantityField from "components/form-control/QuantityField";

function ItemOfUser() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <section className="item-course-of-user">
      {cart.cartItems.length === 0 ? (
        <div className="empty">KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG</div>
      ) : (
        <div className="cart-items">
          {cart.cartItems.map((cartItem) => (
            <div
              className="d-flex justify-content-between align-items-center"
              key={cartItem.product.id}
            >
              <div className="content-left d-flex justify-content-start align-items-center">
                <img
                  src={`${STATIC_HOST}${cartItem.product.thumbnail?.url}`}
                  width="100%"
                />
                <div className="mct-item-course-of-user">
                  <p>{cartItem.product.name}</p>
                </div>
              </div>
              <div className="content-left d-flex justify-content-start align-items-center">
                <p className="fee">{formatPrice(cartItem.product.salePrice)}</p>
                {cartItem.product.promotionPercent > 0 && (
                  <>
                    <p className="sale-fee">
                      {formatPrice(cartItem.product.originalPrice)}
                    </p>
                  </>
                )}
              </div>
              <div className="content-right d-flex justify-content-start align-items-center">
                <p className="count">{cartItem.quantity}</p>
              </div>
              <div className="content-right d-flex justify-content-end align-items-center">
                <p className="fee-total">
                  {formatPrice(cartItem.product.salePrice * cartItem.quantity)}
                </p>
                <Delete
                  onClick={() => handleRemoveFromCart(cartItem)}
                  className="trash"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ItemOfUser;
