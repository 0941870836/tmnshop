import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";

import { NavLink } from "react-router-dom";
import * as yup from "yup";
import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2, 0, 3, 0),
    textAlign: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },

  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object({}).shape({
    fullName: yup
      .string()
      .required("Please enter your full name.")
      .test(
        "should has at least two words",
        "Please enter at least two words",
        (value) => {
          console.log("Value", value);
          return value.split(" ").length >= 2;
        }
      ),

    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),

    password: yup
      .string()
      .required("Please enter your password.")
      .min(6, "Please enter at least 6 characters."),

    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Password does not match"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <section className="form">
        <img src="../img/bg-01.jpg" />
        <div className="main-content signup">
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h4>SIGN UP</h4>
            <div className="d-flex justify-content-between">
              <div className="gr-input border-right">
                <div>
                  <InputField name="fullName" label="Full Name" form={form} />
                </div>
                <div>
                  <InputField name="email" label="Email" form={form} />
                </div>
              </div>
              <div className="gr-input">
                <div>
                  <PasswordField name="password" label="Password" form={form} />
                </div>
                <div>
                  <PasswordField
                    name="retypePassword"
                    label="Retype Password"
                    form={form}
                  />
                </div>
              </div>
            </div>
            <Button
              disable={isSubmitting}
              className="pulse"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              CREATE AN ACCOUNT
            </Button>
            <NavLink className="go-to-form-another" to="/sign-in">
              Bạn đã có tài khoản?
            </NavLink>
          </form>
        </div>
      </section>
    </div>
  );
}

export default RegisterForm;
