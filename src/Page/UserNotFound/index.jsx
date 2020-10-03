import React from "react";
import { Link } from "react-router-dom";

const UserNotFound = () => {
  return (
    <React.Fragment>
      <div className="container">
      <div class="alert alert-danger" role="alert">
        Not data UserNotFound
        <hr/>
        <Link to="/" class="alert-link">Click here to back</Link>
      </div>
      </div>
    </React.Fragment>
  );
};

export default UserNotFound;
