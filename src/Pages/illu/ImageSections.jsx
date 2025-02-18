import React from "react";
import "./ImageSections.css"; // We'll create this CSS file next
import img3 from "../../assets/login/login3.jpg";
const ImageSections = () => {
  const handleSectionClick = (section) => {
    switch (section) {
      case "topLeft":
        alert("You clicked the top left section!");
        break;
      case "topRight":
        alert("You clicked the top right section!");
        break;
      case "bottomLeft":
        alert("You clicked the bottom left section!");
        break;
      case "bottomRight":
        alert("You clicked the bottom right section!");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="image-container ">
        <img src={img3} alt="image3" className="main-image" />

        <div
          className="section top-left"
          onClick={() => handleSectionClick("topLeft")}
        />

        <div
          className="section top-right"
          onClick={() => handleSectionClick("topRight")}
        />

        <div
          className="section bottom-left"
          onClick={() => handleSectionClick("bottomLeft")}
        />

        <div
          className="section bottom-right"
          onClick={() => handleSectionClick("bottomRight")}
        />
      </div>
    </div>
  );
};

export default ImageSections;
