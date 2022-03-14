import { EmailOutlined, Facebook, Phone, YouTube } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer text-center"
      style={{ backgroundImage: " url('../../../img/bg-01.jpg')" }}
    >
      <div className="overflow" />
      <div className="container">
        <div className="main-content">
          <div className="logo-title">
            <h1>INTERN-SHOP</h1>
          </div>
          <div className="row">
            <div className="col-4 chinh-sach">
              <h5>Chính sách &amp; quy định</h5>
              <ol className="list-unstyled">
                <li>
                  <a href="#">Thỏa thuận sử dụng</a>
                </li>
                <li>
                  <a href="#">Quy chế hoạt động</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Quyền lợi thành viên</a>
                </li>
              </ol>
            </div>
            <div className="lien-ket col-4">
              <h5>Liên kết</h5>
              <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/" className="facebook">
                  <Facebook />
                </a>
                <a
                  href="https://www.youtube.com/user/myclassvn"
                  className="youtube"
                >
                  <YouTube />
                </a>
              </div>
            </div>
            <div className="col-4 lien-he text-left">
              <h5 className="d-flex justify-content-center">Liên hệ</h5>
              <ol className="list-unstyled">
                <li>
                  <EmailOutlined />
                  <span>nhancter2000@gmail.com</span>
                </li>
                <li>
                  <Phone />
                  <span>0941870836</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="line-mid" />
        <div className="second-content d-flex justify-content-between">
          <a className="d-inline-block" width={150}>
            <img
              src="https://hocmai.vn/theme/new2/images/congthuong.png"
              className="img-fluid"
            />
          </a>
          <div className="text-right">
            <p>SẢN PHẨM ĐƯỢC TẠO BỞI TMN</p>
            <p>ĐỊA CHỈ: ĐH Công Nghiệp - TP.HCM</p>
            <p>2022 © SHOP. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
