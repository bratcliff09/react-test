import i1 from '../../assets/ace.avif'
import i2 from '../../assets/mvc_deluxe.avif'
import i3 from '../../assets/re4_gold.avif'
import i4 from '../../assets/sf6.avif'
import i5 from '../../assets/sf6_deluxe.avif'
import i6 from '../../assets/sf6_ultimate.avif'
import i7 from '../../assets/village.avif'
import i8 from '../../assets/ghost.avif'
import i9 from '../../assets/okami.avif'
import i10 from '../../assets/network.avif'

const GameData = [
  {
    id: 1,
    title: "The Great Ace Attorney",
    price: 15.99,
    hasDiscount: false,
    discount: 0,
    image: i1
  },
  {
    id: 2,
    title: "Marvel vs Capcom Infinite - Deluxe Edition",
    price: 11.99,
    hasDiscount: true,
    discount: 80,
    image: i2
  },
  {
    id: 3,
    title: "Resident Evil 4 Remake - Gold Edition",
    price: 39.99,
    hasDiscount: true,
    discount: 20,
    image: i3
  },
  {
    id: 4,
    title: "Street Fighter 6",
    price: 39.59,
    hasDiscount: false,
    discount: 20,
    image: i4
  },
  {
    id: 5,
    title: "Street Fighter 6 Deluxe Edition",
    price: 63.74,
    hasDiscount: false,
    discount: 25,
    image: i5
  },
  {
    id: 6,
    title: "Street Fighter 6 Ultimate Edition",
    price: 83.99,
    hasDiscount: true,
    discount: 20,
    image: i6
  },
  {
    id: 7,
    title: "Resident Evil Village Gold Edition",
    price: 19.99,
    hasDiscount: true,
    discount: 60,
    image: i7
  },
  {
    id: 8,
    title: "Ghost Trick: Phantom Detective",
    price: 19.79,
    hasDiscount: false,
    discount: 34,
    image: i8
  },
  {
    id: 9,
    title: "OKAMI HD / 大神 絶景版",
    price: 9.99,
    hasDiscount: true,
    discount: 50,
    image: i9
  },
  {
    id: 10,
    title: "Mega Man Battle Network Legacy Collection (Vol.1 + Vol.2)",
    price: 29.99,
    hasDiscount: false,
    discount: 50,
    image: i10
  },
];

export default GameData;
