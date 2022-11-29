import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Greet = (props) => {
  const { name, role } = props;
  const [state, setState] = useState("Please Click on Login Button");
  const [count, setCount] = useState(0);
  //   const { name, role } =  ;

  const encrememnt = () => {
    setCount(count + 1);
  };

  const massesgeChange = () => {
    setState("Welcome Mahesh");
  };
  const LogOut = () => {
    setState("Thanks for Coming");
  };
  return (
    <div>
      <Container>
        <h2>{state}</h2>
        <button className="btn btn-primary" onClick={massesgeChange}>
          Login
        </button>
        <button className="btn btn-primary" onClick={LogOut}>
          Logout
        </button>
        <div className="counter">
          <h3>Count - {count}</h3>
          <Button onClick={encrememnt}>set counter</Button>
        </div>
        <h3>
          welcome {name} a.k.a {role}
        </h3>
      </Container>
    </div>
  );
};

export default Greet;
