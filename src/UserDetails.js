import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const user = useSelector((state) => {
    return state.user;
  });
  return (
    <div>
      <h1>Data found</h1>
      <h1>Name:{user.name}</h1>
      <h2>email:{user.email}</h2>
      <h2>phone:{user.phone}</h2>
      <h2>skill: {user.skill}</h2>

      <Link to="/">Go Back</Link>
    </div>
  );
};
export default UserDetails;