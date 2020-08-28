import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import zxcvbn from "zxcvbn";
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

import useRegisterMutation from "../graphql/useRegisterMutation";
import { isGraphQLErrorResult } from "../../../helpers";
import {
  usernameRules,
  passwordRules,
  emailRules,
  firstNameRules,
  lastNameRules,
} from "../validation-rules";
import PasswordStrengthIndictator from "../PasswordStrengthIndicator";

const initialState = {
  email: "",
  username: "",
  password: "",
  userNameError: "",
  passwordError: "",
  requestErrors: [],
  isSuccessful: false,
  passwordStrength: 0,
};

const RegisterForm = () => {
  const history = useHistory();
  const [signUpMutation, { loading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState,
    errors: formErrors,
    reset,
    watch,
  } = useForm();

  const [state, setState] = useState(initialState);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedUsername, setFocusedUsername] = useState(false);
  const [focusedFirstName, setFocusedFirstName] = useState(false);
  const [focusedLastName, setFocusedLastName] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
  const passwordValue = watch("password");

  const onPasswordChange = (event) => {
    const password = event.target.value;
    const evaluation = zxcvbn(password);
    setState({
      ...state,
      password,
      passwordStrength: evaluation.score,
    });
  };

  const flashErrorToState = (error) => {
    setState({
      ...state,
      requestErrors: error.messages || [error.message],
    });
    setTimeout(() => setState({ ...state, requestErrors: [] }), 4000);
  };

  const onSubmit = async (formData, event) => {
    try {
      const { data } = await signUpMutation({
        variables: {
          email: formData.email,
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: formData.password,
        },
      });
      reset();
      setState({ ...state, username: formData.username, isSuccessful: true });
      if (isGraphQLErrorResult(data.signUp)) {
        flashErrorToState(data.signUp);
        return;
      }
    } catch (error) {
      history.push("/error");
      return;
    }
  };

  return (
    <CardBody className="px-lg-5 py-lg-5">
      {!state.isSuccessful ? (
        <>
          <Form role="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormGroup
              className={classnames({
                focused: focusedEmail,
              })}
            >
              <InputGroup className="input-group-merge input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  onFocus={() => setFocusedEmail(true)}
                  onBlur={() => setFocusedEmail(false)}
                  innerRef={register(emailRules)}
                />
              </InputGroup>
              {formErrors && formErrors.email && (
                <div className="mt-2">
                  <small className="text-danger">
                    Please use a valid email address.
                  </small>
                </div>
              )}
            </FormGroup>
            <FormGroup
              className={classnames({
                focused: focusedUsername,
              })}
            >
              <InputGroup className="input-group-merge input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Username"
                  type="text"
                  name="username"
                  autoComplete="username"
                  onFocus={() => setFocusedUsername(true)}
                  onBlur={() => setFocusedUsername(false)}
                  innerRef={register(usernameRules)}
                />
              </InputGroup>
              {formErrors && formErrors.username && (
                <div className="mt-2">
                  <small className="text-danger">
                    Your username must be between 3 - 20 characters.
                  </small>
                </div>
              )}
            </FormGroup>
            <FormGroup
              className={classnames({
                focused: focusedFirstName,
              })}
            >
              <InputGroup className="input-group-merge input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="First name"
                  type="text"
                  name="firstName"
                  onFocus={() => setFocusedFirstName(true)}
                  onBlur={() => setFocusedFirstName(false)}
                  innerRef={register(firstNameRules)}
                />
              </InputGroup>
              {formErrors && formErrors.username && (
                <div className="mt-2">
                  <small className="text-danger">
                    Your first name must be longer than 2 characters and contain
                    only letters.
                  </small>
                </div>
              )}
            </FormGroup>
            <FormGroup
              className={classnames({
                focused: focusedLastName,
              })}
            >
              <InputGroup className="input-group-merge input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Last name"
                  type="text"
                  name="lastName"
                  onFocus={() => setFocusedLastName(true)}
                  onBlur={() => setFocusedLastName(false)}
                  innerRef={register(lastNameRules)}
                />
              </InputGroup>
              {formErrors && formErrors.lastname && (
                <div className="mt-2">
                  <small className="text-danger">
                    Your last name must be longer than 2 characters and contain
                    only letters.
                  </small>
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
                  name="password"
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                  onFocus={() => setFocusedPassword(true)}
                  onBlur={() => setFocusedPassword(false)}
                  innerRef={register(passwordRules)}
                  onChange={(event) => onPasswordChange(event)}
                />
              </InputGroup>
              {formErrors && formErrors.password && (
                <div className="mt-2">
                  <small className="text-danger">
                    Your password must have lowercase and uppercase letters, and
                    numbers and symbols.
                  </small>
                </div>
              )}
              {state.requestErrors.length > 0 && (
                <div className="mt-2">
                  {state.requestErrors.map((error) => (
                    <small key={error} className="text-danger">
                      {error}
                    </small>
                  ))}
                </div>
              )}
              {!focusedPassword ||
                (formState && formState.dirtyFields["password"] && (
                  <PasswordStrengthIndictator
                    passwordStrength={state.passwordStrength}
                    password={state.password}
                  />
                ))}
            </FormGroup>
            <FormGroup
              className={classnames("mb-3", {
                focused: focusedConfirmPassword,
              })}
            >
              <InputGroup className="input-group-merge input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Confirm password"
                  type="password"
                  name="confirmPassword"
                  onFocus={() => setFocusedConfirmPassword(true)}
                  onBlur={() => setFocusedConfirmPassword(false)}
                  innerRef={register({
                    ...passwordRules,
                    validate: (value) => value === passwordValue,
                  })}
                />
              </InputGroup>
              {formErrors && formErrors.confirmPassword && (
                <div className="mt-2">
                  <small className="text-danger">
                    Your passwords must match.
                  </small>
                </div>
              )}
            </FormGroup>
            {state.isSuccessful && (
              <>
                <div className="mt-2 pl-1">
                  <small className="text-success">
                    Thanks, {state.username}! A link is on it's way to your
                    inbox. Please use it to verify your account.
                  </small>
                </div>
              </>
            )}
            <div className="text-center">
              <Button
                className="mt-4"
                color="info"
                type="submit"
                disabled={
                  loading ||
                  Object.keys(formErrors).length > 0 ||
                  !formState.isDirty
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
                Create account
              </Button>
            </div>
            <div className="mt-2 text-center">
              <Link className="mt-4 small text-primary" to="/login">
                Go to login
              </Link>
            </div>
          </Form>
        </>
      ) : (
        <>
          <Row>
            <Col>
              <p className="lead text-center text-primary">
                Thanks {state.username}! A link is on it's way to your inbox.
              </p>
              <p className="text-center text-primary">
                <strong>Click on it to verify your account.</strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                className="mt-4 d-flex align-items-center"
                color="info"
                type="submit"
                onClick={() => history.push("/login")}
              >
                Go to login
                <i class="ml-2 mt-05 fas fa-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </>
      )}
    </CardBody>
  );
};

export default RegisterForm;
