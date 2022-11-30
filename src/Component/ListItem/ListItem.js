import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const ListItem = () => {
  const names = ["dinesh", "mahesh", "suresh", "kamlesh", "rakesh"];
  const [count, setState] = useState(0);

  const [channel, setchannel] = useState("coding");

  const channelChange = () => {
    setchannel("Technical Coding ");
  };

  const counter = () => {
    setState(count + 1);
  };

  return (
    <div>
      <Container>
        <h2>List Item</h2>
        {/* map method use here */}
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <div>
          {/* counter with state use here */}
          counter {count} <br />
          <Button onClick={counter}>Counter</Button>
        </div>
        <div>
          {/* CLICK EVENT USE HERE */}
          <h2>hi suresh welocme to the {channel}</h2>
          <Button onClick={channelChange}>Channel Change</Button>
        </div>
      </Container>
    </div>
  );
};

export default ListItem;
