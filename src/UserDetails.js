import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  
  const user = useSelector((state) => {
    return state.user;

  });
  return (
    <div className="row">
      <div>
        <h1>Data found</h1>
        <img className="col s2" height={"250px"} width={"250px"} src={URL.createObjectURL(user.img)}/>
        <h4 className="allign-left">Name: {user.name}</h4>
        <h5 className="allign-left">Email: {user.email}</h5>
        <h5 className="col s8 offset-s7">Phone: {user.phone}</h5>
        <h5 className="col s8 offset-s7">Skill: {user.skill}</h5>
        <h5 className="col s8 offset-s7">Experience: {user.experience}</h5>
        <h5 className="col s8 offset-s7">Language:{user.language}</h5>
        <Link className="col s8 offset-s1" to="/">Go Back</Link>
      </div>
    </div>
  );
};
export default UserDetails;