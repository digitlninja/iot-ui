import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";

import classnames from "classnames";
import {
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import useLoginMutation from "../graphql/useLoginMutation";
import { Context } from "../../../store/Store";
import { passwordRules, usernameOrEmailRules } from "../validation-rules";
import { isGraphQLErrorResult } from "../../../helpers";
import useRefreshTokensMutation from "../graphql/useRefreshTokensMutation";

const initialState = {
  username: "",
  password: "",
  userNameError: "",
  passwordError: "",
  requestErrors: [],
};

const LoginForm = () => {
  let history = useHistory();
  const [loginMutation, { loading }] = useLoginMutation();
  const [refreshTokensMutation] = useRefreshTokensMutation();
  // eslint-disable-next-line
  const [globalState, dispatch, setUserAuthData] = useContext(Context);

  const { register, handleSubmit, errors: formErrors, reset } = useForm();

  const [state, setState] = useState(initialState);
  const [focusedUsername, setFocusedUsername] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const flashErrorToState = (error) => {
    setState({
      ...state,
      requestErrors: error.messages || [error.message],
    });
    setTimeout(() => setState({ ...state, requestErrors: [] }), 4000);
  };

  const onSubmit = async (formData) => {
    try {
      const { data } = await loginMutation({
        variables: { username: formData.username, password: formData.password },
      });
      reset();
      if (isGraphQLErrorResult(data.logIn)) {
        flashErrorToState(data.logIn);
        return;
      }

      setUserAuthData(data.logIn, refreshTokensMutation);
      history.push("/");
    } catch (error) {
      console.error({ error });
      history.push("/error");
      return;
    }
  };
  return (
    <CardBody className="px-lg-5 py-lg-5">
      <Form role="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          className={classnames("mb-3", {
            focused: focusedUsername,
          })}
        >
          <InputGroup className="input-group-merge input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-single-02" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Username"
              type="text"
              name="username"
              autocomplete="username"
              onFocus={() => setFocusedUsername(true)}
              onBlur={() => setFocusedUsername(false)}
              innerRef={register(usernameOrEmailRules)}
            />
          </InputGroup>
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
              autocomplete="current-password"
              onFocus={() => setFocusedPassword(true)}
              onBlur={() => setFocusedPassword(false)}
              innerRef={register(passwordRules)}
            />
          </InputGroup>
          {state.requestErrors.length > 0 && (
            <div className="mt-2 pl-1">
              {state.requestErrors.map((error) => (
                <small key={error} className="text-danger">
                  {error}
                </small>
              ))}
            </div>
          )}
        </FormGroup>
        <div className="text-center">
          <Button
            className="my-4"
            color="info"
            type="submit"
            disabled={
              loading || Object.keys(formErrors).length > 0
              // !formState.isDirty
            }
          >
            {loading && (
              <Loader
                type="TailSpin"
                color="#fff"
                height={16}
                width={16}
                radius={5}
                className="mr-2 float-left"
              />
            )}
            Login
          </Button>
        </div>
        <Row className="mt-3">
          <Col xs="6">
            <Link className="text-muted" to="/forgot-password">
              <small>Forgot password?</small>
            </Link>
          </Col>
          <Col className="text-right" xs="6">
            <Link className="text-muted" to="/register">
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
      </Form>
    </CardBody>
  );
};

export default LoginForm;
