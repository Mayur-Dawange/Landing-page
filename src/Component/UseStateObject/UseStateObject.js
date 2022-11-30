import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const UseStateObject = () => {
  const myObj = [
    {
      id: 0,
      names: "Surendra",
      Age: 28,
    },
    {
      id: 1,
      names: "Mahendra",
      Age: 22,
    },
    {
      id: 2,
      names: "Jitendra",
      Age: 25,
    },
    {
      id: 3,
      names: "Lokendra",
      Age: 29,
    },
    {
      id: 4,
      names: "Devendra",
      Age: 27,
    },
  ];
  const [myObject, setmyObject] = useState(myObj);

  //   const onChange = () => {
  //     setmyObject([]);
  //   };

  const removeObj = (id) => {
    // console.log(id);
    const myNewObj = myObject.filter((named) => {
      return named.id !== id;
    });
    setmyObject(myNewObj);
  };

  return (
    <div>
      <Container className="col-lg-8">
        <table className="w-50 table-bordered text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myObject.map((named, index) => (
              <tr key={index}>
                <td>{named.id}</td>
                <td>{named.names} </td>
                <td>{named.Age}</td>
                <td>
                  <Button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeObj(named.id)}
                  >
                    Remove
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Button className="btn btn-primary" onClick={onChange}>
          Clear All Data
        </Button> */}
      </Container>
    </div>
  );
};

export default UseStateObject;
