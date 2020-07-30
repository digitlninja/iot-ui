import React from "react";
import { Container, Row, Col } from "reactstrap";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animations/error-coffee-spilled.json";

const ErrorPage = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container className="d-flex h-100vh">
      <Row className="align-items-center justify-content-center">
        <Col lg="6" md="8">
          <h1 className="text-danger text-center">Oops!</h1>
          <Lottie options={lottieOptions} height={300} width={300} />
          <p className="lead text-primary">
            Could it be Eskom? Or could it be a new Lockdown Level? Either way,
            we've got the message and are on it. Try again in a bit!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
