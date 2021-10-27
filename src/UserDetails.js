import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <div className="row">
      <div className="col s8 offset-s4">
      <h1>Data found</h1>
      <img src={user.img}/>
      <h4>Name: {user.name}</h4>
      <h5>email: {user.email}</h5>
      <h5>phone: {user.phone}</h5>
      <h5>skill: {user.skill}</h5>

      <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};
export default UserDetails;