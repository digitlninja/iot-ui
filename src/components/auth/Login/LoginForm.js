import React, { useState, useContext } from "react";
import classnames from "classnames";
import {
  Button,
  CardBody,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";

import useLoginMutation from "../graphql/useLoginMutation";
import useRefreshTokensMutation from "../graphql/useRefreshTokensMutation";
import Context from "../../../store/Context";
import { useMutation } from "@apollo/client";

const initialState = {
  username: "",
  password: "",
  userNameError: "",
  passwordError: "",
  requestError: "",
};

const LoginForm = () => {
  const alphaNumericRegex = /[a-zA-Z0-9]/;
  const cognitoRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`])\S{8,99}$/;

  const usernameRules = { required: true, minLength: 3, maxLength: 20, pattern: alphaNumericRegex };

  const passwordRules = { required: true, pattern: cognitoRegex };

  const [loginMutation, { loading }] = useLoginMutation();
  const [refreshUserTokensMutation, { data }] = useRefreshTokensMutation();

  const { globalState, actions } = useContext(Context);
  const [state, setState] = useState(initialState);

  const [focusedEmail, setFocusedUsername] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const { register, handleSubmit, formState, errors: formErrors } = useForm();

  const saveTokens = (data) => {
    localStorage.setItem("idToken", data.login.idToken);
    localStorage.setItem("accessToken", data.login.accessToken);
    localStorage.setItem("refreshToken", data.login.refreshToken);
  };

  const onSubmit = async (formData) => {
    try {
      const { data } = await loginMutation({ variables: { username: formData.username, password: formData.password } });
      saveTokens(data);
      actions({ type: "setRefreshTimeout", payload: { tokens: data.login } });

      // const decodedToken = jwtDecode(payload.idToken);

      // setTimeout(() => {}, decodedToken.exp - decodedToken.auth_time - 300);
    } catch (error) {
      setState({ ...state, requestError: "Incorrect username or password." });
    }
  };
  return (
    <>
      <CardHeader className="bg-transparent pb-5">
        <div className="text-muted text-center mt-2 mb-3">
          <small>Sign in with</small>
        </div>
        <div className="btn-wrapper text-center">
          <Button className="btn-neutral btn-icon" color="default" onClick={(event) => event.preventDefault()}>
            <span className="btn-inner--icon mr-1">
              <img alt="..." src={require("assets/img/icons/common/google.svg")} />
            </span>
            <span className="btn-inner--text">Google</span>
          </Button>
        </div>
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <div className="text-center text-muted mb-4">
          <small>Or sign in with credentials</small>
        </div>
        <Form role="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            className={classnames("mb-3", {
              focused: focusedEmail,
            })}
          >
            <InputGroup className="input-group-merge input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Username"
                type="text"
                name="username"
                onFocus={() => setFocusedUsername(true)}
                onBlur={() => setFocusedUsername(false)}
                innerRef={register(usernameRules)}
              />
            </InputGroup>
            {formErrors && formErrors.username && (
              <div className="mt-2">
                <small className="text-danger">Your username must be between 3 - 20 characters.</small>
              </div>
            )}
          </FormGroup>
          <FormGroup
            className={classnames({
              focused: focusedPassword,
            })}
          >
            <InputGroup className="input-group-merge input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-lock-circle-open" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                onFocus={() => setFocusedPassword(true)}
                onBlur={() => setFocusedPassword(false)}
                innerRef={register(passwordRules)}
              />
            </InputGroup>
            {formErrors && formErrors.password && (
              <div className="mt-2">
                <small className="text-danger">
                  Your password must have lowercase and uppercase letters, and numbers and symbols.
                </small>
              </div>
            )}
            {state.requestError && (
              <div className="mt-2">
                <small className="text-danger">{state.requestError}</small>
              </div>
            )}
          </FormGroup>
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
            <label className="custom-control-label" htmlFor=" customCheckLogin">
              <span className="text-muted">Remember me</span>
            </label>
          </div>
          <div className="text-center">
            <Button
              className="my-4"
              color="info"
              type="submit"
              disabled={loading || Object.keys(formErrors).length || !formState.isDirty}
            >
              Sign in
            </Button>
          </div>
        </Form>
      </CardBody>
    </>
  );
};

export default LoginForm;
