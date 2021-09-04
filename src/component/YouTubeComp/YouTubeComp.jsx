import React from "react";
import "./YouTubeComp.css";
import ImgNotFound from "../../assets/404.png";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={props.img} alt="" />
        <p className="author">{props.author}</p>
      </div>

      <p className="title">{props.title}</p>
      <p className="decs">description here</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  title: "No Title",
  img: ImgNotFound,
  author: "Not Found",
};
export default YouTubeComp;
