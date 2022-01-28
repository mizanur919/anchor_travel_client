import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const user = { email };
    fetch("https://evening-cliffs-29156.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setEmail(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleAdminSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            onChange={handleOnChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <button className="login-button btn btn-primary w-100" type="submit">
          Make Admin
        </button>
        <br />
        <br />
      </Form>
    </div>
  );
};

export default MakeAdmin;
