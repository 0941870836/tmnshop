import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import LoginForm from "../LoginForm";
import { login } from "../userSlice";

const successApi = (strSuccess) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    html: `<h3 style="color:#a5dc86"><b>SUCCESS!</b></h3><b>${strSuccess}</b>`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const errorApi = (err) => {
  return Swal.fire({
    position: "center",
    icon: "error",
    html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>${err}</b>`,
    showConfirmButton: false,
    timer: 1500,
  });
};

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      successApi("ĐĂNG NHẬP THÀNH CÔNG.");
      history.push("/");
    } catch (err) {
      errorApi("ĐĂNG NHẬP THẤT BẠI.");
      history.push("/sign-in");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
