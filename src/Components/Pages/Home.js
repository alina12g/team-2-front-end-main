import React from "react";
import Cards from "../Card/Card";
import ProductCard from "../Card/ProductCard";
import { Button, CardActions } from "@mui/material";
import { ReactComponent as NextButton } from "../../Images/Group1340.svg";
import { Link } from "react-router-dom";
import "./Home.css";

import promoCards from "../../Constants/PromoCards"
import productTopGelato from "../../Constants/ProductCardsTopGelato"
import productTopDonuts from "../../Constants/ProductCardsTopDonuts"
import productMerchandise from '../../Constants/PorductCardsMerchandise'

const Home = () => {
  return (
    <div>
      <div className="cards d-flex justify-content-between">
        {promoCards.map((detail) => {
          return (
            <Cards
              title={detail.title}
              image={detail.image}
              btnName={detail.buttonName}
              routeName={detail.routeName}
            />
          );
        })}
      </div>
      <div>
        <div className="allign-text">
          <Button disabled>
            <h2 className="title-icecream">TOP SELLING ICE CREAM &amp; GELATO </h2>
          </Button>
          <Button component={Link} to="../Donuts" className="btn-icon">
            <h2 className="button-next">EXPLORE ALL </h2>
            <NextButton />
          </Button>
        </div>
        <div className="cards-container">
          {productTopGelato.map((detail) => {
            return (
              <ProductCard
                title={detail.title}
                image={detail.image}
                description={detail.description}
                price={detail.price}
              />
            );
          })}
        </div>
      </div>
      <div className="allign-text">
        <Button disabled>
          <h2 className="title-icecream">TOP SELLING DONUTS </h2>
        </Button>
        <Button component={Link} to="../Donuts" className="btn-icon">
          <h2 className="button-next">EXPLORE ALL </h2>
          <NextButton />
        </Button>
      </div>
      <div className="cards-container">
        {productTopDonuts.map((detail) => {
          return (
            <ProductCard
              title={detail.title}
              image={detail.image}
              description={detail.description}
              price={detail.price}
            />
          );
        })}
      </div>
      <div className="allign-text">
        <Button disabled>
          <h2 className="title-icecream">MERCHANDISE </h2>
        </Button>
      </div>
      <div className="cards-merch">
        {productMerchandise.map((detail) => {
          return (
            <ProductCard
              title={detail.title}
              image={detail.image}
              description={detail.description}
              price={detail.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;