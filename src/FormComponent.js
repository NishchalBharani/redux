import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Axios from 'axios'

import { useDispatch } from "react-redux";
import { addUserAction } from "./Actions/userAction";

import "materialize-css/dist/css/materialize.min.css"

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skill, setSkill] = useState("");
  const [img, setImg] = useState("")
  

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

  
  

  const uploadImage = () => {
    const formData1 = new FormData()
    formData1.append('file', img)
    formData1.append('Upload_preset', 'nishchal')

    Axios.post('https://api.cloudinary.com/v1_1/dxjweonxb/image/upload', formData1).then((res) => {
      console.log(res)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone,
      skill: skill,
      img: img
    };
    const moveforwardData = () => {
      props.history.push("/usersDetails");
    };

    dispatch(addUserAction(formData, moveforwardData));
  };
  return (
    <div className="row">
      <div className="col s8 offset-s4">
      <form onSubmit={handleSubmit} class="col s6">
        <h6><strong>Enter Name</strong></h6>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <h6><strong>Enter Email</strong></h6>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <h6><strong>Enter Phone number</strong></h6>
        <input
          type="text"
          value={phone}
          name="phone"
          onChange={handleChange}
          placeholder="Enter Phone No"
        />
        <br />
        <br />
        <h6><strong>Enter Skill</strong></h6>
        <input
          type="text"
          value={skill}
          name="skill"
          onChange={handleChange}
          placeholder="Enter Skills"
        />
        <br />
        <h6><strong>Upload image</strong></h6>
        <input 
          type="file" 
         
          onChange={(event)=>{
            setImg(event.target.files[0])
          }}
          name="img"
          placeholder="Upload Image"></input>
          
        <input type="submit" value="Send Data" class="wave-effect waves-light btn" />
        
      </form>
      </div>
    </div>
  );
};
export default withRouter(FormComponent);
