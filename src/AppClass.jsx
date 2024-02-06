import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
        name: "Elephant 1",
      },
      {
        id: 2,
        img: elephant,
        name: "Elephant 2",
      },
      {
        id: 3,
        img: elephant,
        name: "Elephant 3",
      },
      {
        id: 4,
        img: elephant,
        name: "Elephant 4",
      },
    ];
    return data;
  };

  render() {
    return <Images imageData={this.imageData} />;
  }
}

const Images = ({ imageData }) => {
  return (
    <>
      <div className="h1Container">
        <h1>Kalvium gallary</h1>
      </div>
      <div className="imagesContainer">
        {imageData().map((item) => (
          <img id={item.id} className="images" key={item.id} src={item.img} alt={item.name} />
        ))}
      </div>
    </>
  );
};