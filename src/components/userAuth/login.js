import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Typography, FormControl } from "@material-ui/core";
import { ButtonWithText } from "../common/button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStyles, CustomTextField } from "./loginStyles";

const LoginPage = (props) => {
  const matches_sm = useMediaQuery("(max-width:600px)");

  const classes = useStyles({ sm: matches_sm });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    props.history.push("/home");
  };

  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.textContainer}>
          <Typography className={classes.signupHeader}>Login</Typography>
          <Typography className={classes.signupText}>
            Get Access to your Orders, Wishlist and Recommendations
          </Typography>
        </div>

        <div className={classes.formContainer}>
          <FormControl className={classes.inputContainer}>
            <CustomTextField
              required
              id="email"
              name="email"
              label="Email"
              {...register("email")}
              error={errors.email ? true : false}
            />
          </FormControl>
          <FormControl className={classes.inputContainer}>
            <CustomTextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
            />
          </FormControl>

          <div className={classes.signupButton}>
            <ButtonWithText
              dispText="Login"
              color="#FFFFFF"
              backgroundColor="#d90166"
              borderColor="#d90166"
              borderRadius="1px"
              height="30px"
              fontSize="15px"
              width="100%"
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(connect()(LoginPage));
