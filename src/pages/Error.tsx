import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {
  return (
    <Container className="d-flex flex-colum align-items-center">
      <Lottie
        animationData={notFound}
        style={{ width: "400" }}
        loop={false}
        onComplete={() => {
          console.log("fire");
        }}
      />
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
