import corporateHome from "../Images/corporateHome.png";
import donutsHome from "../Images/donutsHome.png";
import gelatoHome from "../Images/gelatoHome.png";

const promoCards = [
  {
    id: "1",
    image: gelatoHome,
    alt: "Icecream and gelato",
    title: "ICE CREAM & GELATO",
    buttonName: "Explore options",
    routeName: "/gelato",
  },
  {
    id: "2",
    image: donutsHome,
    alt: "Donuts",
    title: "DELICIOUS DONUTS",
    buttonName: "Explore options",
    routeName: "/donuts",
  },
  {
    id: "3",
    image: corporateHome,
    alt: "Family and corporate",
    title: "FAMILY / CORPORATE",
    buttonName: "Explore options",
    routeName: "/",
  },
];
export default promoCards;
