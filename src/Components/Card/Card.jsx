import React from "react";
import "./Card.css";
const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <img src={item.img} alt="" className="img" />

        <h1>{item.title}</h1>
        <p>{item.date}</p>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Card;
