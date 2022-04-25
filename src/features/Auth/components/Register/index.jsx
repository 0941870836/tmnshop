import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { register } from "../userSlice";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

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

function Register(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      successApi("ĐĂNG KÝ THÀNH CÔNG.");
      history.push("/sign-in");
    } catch (err) {
      errorApi("EMAIL ĐÃ TỒN TẠI.");
      history.push("/sign-up");
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
