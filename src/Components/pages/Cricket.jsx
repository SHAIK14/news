import React from "react";
import "./Cricket.css";
import Card from "../Card/Card";
const Cricket = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: "News",
      date: "31-7-2023",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: "News",
      date: "31-7-2023",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    },
  ];
  return (
    <div className="cricket">
      <div className="datapass">
        {data.map((item, idx) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cricket;
