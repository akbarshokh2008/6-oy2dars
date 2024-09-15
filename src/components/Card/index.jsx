import React from "react";
import "./index.css";
import users from "../../assets/user.json";
function index() {
  return (
    <div className="container cards">
      {users.map((user, index) => (
        <div key={index} className="card">
          <img src={user.image} alt="" />
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>
            <b>Telefon: </b> {user.phone}
          </p>
          <p>
            <b>Email: </b> {user.email}
          </p>
          <p>
            <b>Address: </b> {user.address.region}
          </p>
          <p>
            <b>Mashina:</b> {user.cars.join(" / ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default index;
