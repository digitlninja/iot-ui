import React, { useState } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
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

const LoginForm = () => {
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  return (
    <>
      <CardHeader className="bg-transparent pb-5">
        <div className="text-muted text-center mt-2 mb-3">
          <small>Sign in with</small>
        </div>
        <div className="btn-wrapper text-center">
          <Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
            <span className="btn-inner--icon mr-1">
              <img alt="..." src={require("assets/img/icons/common/github.svg")} />
            </span>
            <span className="btn-inner--text">Github</span>
          </Button>
          <Button className="btn-neutral btn-icon" color="default" href="#pablo" onClick={(e) => e.preventDefault()}>
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
        <Form role="form">
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
                placeholder="Email"
                type="email"
                onFocus={() => setFocusedEmail(true)}
                onBlur={() => setFocusedEmail(false)}
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
                onFocus={() => setFocusedPassword(true)}
                onBlur={() => setFocusedPassword(false)}
              />
            </InputGroup>
          </FormGroup>
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
            <label className="custom-control-label" htmlFor=" customCheckLogin">
              <span className="text-muted">Remember me</span>
            </label>
          </div>
          <div className="text-center">
            <Button className="my-4" color="info" type="button">
              Sign in
            </Button>
          </div>
        </Form>
      </CardBody>
    </>
  );
};

export default LoginForm;
