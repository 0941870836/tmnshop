import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object({}).shape({
    identifier: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),

    password: yup.string().required("Please enter your password."),
  });
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
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
        <div className="main-content">
          <form onSubmit={form.handleSubmit(handleSubmit)} to="/">
            <h4>SIGN IN</h4>
            <div>
              <InputField
                id="standard-basic"
                name="identifier"
                label="Email"
                margin="normal"
                form={form}
              />
            </div>
            <PasswordField name="password" label="Password" form={form} />

            <div className="mt-1">
              <Checkbox
                value="checkedB"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox",
                }}
              />
              <span>Ghi nhớ tài khoản</span>
            </div>
            <Button
              disable={isSubmitting}
              className="pulse"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              SIGN IN
            </Button>
            <NavLink className="go-to-form-another" to="/sign-up">
              Bạn chưa có tài khoản?
            </NavLink>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
