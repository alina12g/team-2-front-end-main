import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div>
      <div className="card cardSize text-white ">
        <img
          className="card-img cardOverlay "
          src={props.image}
          alt="Card image"
        />
        <div className="card-img-overlay centerOverlay">
          <h5 className="card-title ">{props.title}</h5>
          <Link to={props.routeName}>
            <button className="btn btn-outline-light"> {props.btnName}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
