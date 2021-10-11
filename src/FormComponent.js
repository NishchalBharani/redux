import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addUserAction } from "./Actions/userAction";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("")

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const attr = e.target.name;
    if (attr === "name") {
      setName(e.target.value);
    } else if (attr === "email") {
      setEmail(e.target.value);
    } else if (attr === "phone") {
      setPhone(e.target.value);
    }else if (attr === "skill") {
        setSkill(e.target.value)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      phone: phone,
      skill: skill
    };
    const moveforwardData = () => {
      props.history.push("/usersDetails");
    };

    dispatch(addUserAction(formData, moveforwardData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="text"
          value={phone}
          name="phone"
          onChange={handleChange}
          placeholder="Enter Phone No"
        />
        <br />
        <br />
        <input
          type="text"
          value={skill}
          name="skill"
          onChange={handleChange}
          placeholder="Enter Skills"
        />
        <input type="submit" value="Send Data" />
      </form>
    </div>
  );
};
export default withRouter(FormComponent);
