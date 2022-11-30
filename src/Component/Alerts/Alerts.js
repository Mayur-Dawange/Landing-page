import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible(props) {
  const [show, setShow] = useState(null);
  // const vehicleList = ["bike", "car", "truck", "bus", "tempo", "flight"];

  const showAlert = (message, type) => {
    setShow({
      msg: message,
      type: type,
    });
    showAlert("mode has been enabeled", "success");
  };

  return (
    <>
      <Container className="my-5">
        props.alert &&{" "}
        <Alert show={show} variant={props.alert.type}>
          <Alert.Heading>{props.alert.type}</Alert.Heading>
          <p>{props.alert.mesg}</p>

          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-danger">
              Close
            </Button>
          </div>
        </Alert>
        {!show && (
          <Button onClick={() => setShow(true)} variant={props.alert.type}>
            Show Vehicle List
          </Button>
        )}
        <Button
          onClick={showAlert}
          showAlert={showAlert}
          variant={props.alert.type}
        >
          Show Vehicle List
        </Button>
      </Container>
    </>
  );
}

export default AlertDismissible;
