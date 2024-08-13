import React from "react";
import perfumeVideo from "../asserts/video/persume2.mp4";
import guccu from "../asserts/video/guccu.mp4";

const Data = [
  {
    id: 1,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-sunflowers_23-2149705875.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-sunflowers_23-2149705875.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    name: "New T-shirt",
    price: "1800",
    pricefake: "2500",
    discount: "28",
    rating: 4.5,
    description:
      "A stylish and comfortable new T-shirt perfect for casual wear.",
  },
  {
    id: 2,
    tag: (
      <video
        autoPlay
        muted
        loop
        src={perfumeVideo}
        className="pickImg mediaItem"
        style={{ width: "100%" }}
      ></video>
    ),
    url: perfumeVideo,
    name: "Oscar London Perfume",
    price: "5200",
    pricefake: "7600",
    discount: "31",
    rating: 4.8,
    description:
      "Oscar London Perfume with an unforgettable fragrance, ideal for special occasions.",
  },
  {
    id: 3,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17550.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17550.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Sun Cream Kit",
    price: "3200",
    pricefake: "4500",
    discount: "29",
    rating: 3.9,
    description:
      "Protect your skin with this comprehensive sun cream kit, perfect for daily use.",
  },
  {
    id: 4,
    tag: (
      <img
        src="https://img.freepik.com/premium-photo/female-purchasing-cloth-store_601128-8935.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/premium-photo/female-purchasing-cloth-store_601128-8935.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Bluetooth Speaker",
    price: "2900",
    pricefake: "3500",
    discount: "17",
    rating: 4.2,
    description:
      "Portable Bluetooth speaker with high-quality sound, ideal for on-the-go music lovers.",
  },
  {
    id: 5,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/lovely-girl-with-dress-pigtails-hairstyle_23-2148356610.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/lovely-girl-with-dress-pigtails-hairstyle_23-2148356610.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Kids Dress",
    price: "1600",
    pricefake: "2200",
    discount: "27",
    rating: 3.5,
    description:
      "Adorable and comfortable kids' dress, perfect for everyday wear.",
  },
  {
    id: 6,
    tag: (
      <img
        src="https://img.freepik.com/premium-photo/fashion-girl-stylish-clothes-colored-wall_86390-1250.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/premium-photo/fashion-girl-stylish-clothes-colored-wall_86390-1250.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Fashion Sunglasses",
    price: "700",
    pricefake: "1500",
    discount: "53",
    rating: 4.7,
    description:
      "Trendy fashion sunglasses with UV protection, a must-have accessory.",
  },
  {
    id: 7,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/front-view-covering-with-one-hand-his-eye_23-2148356614.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/front-view-covering-with-one-hand-his-eye_23-2148356614.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Wrist Watch",
    price: "2100",
    pricefake: "3000",
    discount: "30",
    rating: 4.1,
    description:
      "Stylish wristwatch with a durable strap, perfect for daily use.",
  },
  {
    id: 8,
    tag: (
      <video
        autoPlay
        muted
        loop
        src={guccu}
        className="pickImg mediaItem"
        style={{ width: "100%" }}
      ></video>
    ),
    url: guccu,
    name: "Designer Handbag",
    price: "7200",
    pricefake: "9000",
    discount: "20",
    rating: 4.9,
    description: "Luxurious designer handbag with a chic and modern design.",
  },
  {
    id: 9,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/rebel-man-plaid-shirt-posing_171337-19930.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/rebel-man-plaid-shirt-posing_171337-19930.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Men's Casual Shirt",
    price: "3200",
    pricefake: "4800",
    discount: "33",
    rating: 3.7,
    description: "Casual men's shirt made from soft, breathable fabric.",
  },
  {
    id: 10,
    tag: (
      <img
        src="https://img.freepik.com/premium-photo/man-model-coat-outside_1042628-554010.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/premium-photo/man-model-coat-outside_1042628-554010.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Winter Coat",
    price: "6700",
    pricefake: "8400",
    discount: "20",
    rating: 4.3,
    description: "Warm and stylish winter coat with a modern fit.",
  },
  {
    id: 11,
    tag: (
      <img
        src="https://img.freepik.com/premium-photo/little-girl-yellow-dress-holding-leaf_961875-269239.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/premium-photo/little-girl-yellow-dress-holding-leaf_961875-269239.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    name: "Kids Toy Set",
    price: "1400",
    pricefake: "2000",
    discount: "30",
    rating: 4.0,
    description:
      "Fun and educational toy set for kids, perfect for indoor play.",
  },
  {
    id: 12,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/fashionable-man-looking-away_23-2148323598.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/fashionable-man-looking-away_23-2148323598.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Men's Jacket",
    price: "4500",
    pricefake: "6000",
    discount: "25",
    rating: 3.8,
    description:
      "Stylish men's jacket with a modern design, perfect for cooler weather.",
  },
  {
    id: 13,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/she-has-great-street-style_329181-4716.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/she-has-great-street-style_329181-4716.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Women's Stylish Top",
    price: "2100",
    pricefake: "3200",
    discount: "34",
    rating: 4.6,
    description: "Trendy and stylish top for women, perfect for a night out.",
  },
  {
    id: 14,
    tag: (
      <img
        src="https://img.freepik.com/premium-photo/indian-man-traditional-wear-kurta-pyjama-cloths-male-fashion-model-sherwani-posing-standing-against-brown-grunge-background-selective-focus_466689-45505.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/premium-photo/indian-man-traditional-wear-kurta-pyjama-cloths-male-fashion-model-sherwani-posing-standing-against-brown-grunge-background-selective-focus_466689-45505.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    name: "Traditional Kurta",
    price: "3000",
    pricefake: "4200",
    discount: "29",
    rating: 3.6,
    description:
      "Traditional Kurta for men, perfect for festivals and special occasions.",
  },
  {
    id: 15,
    tag: (
      <img
        src="https://img.freepik.com/free-photo/full-shot-beautiful-lady_23-2148440576.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/free-photo/full-shot-beautiful-lady_23-2148440576.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid",
    name: "Evening Gown",
    price: "5800",
    pricefake: "7500",
    discount: "23",
    rating: 4.4,
    description:
      "Elegant evening gown with a sophisticated design, perfect for formal events.",
  },
  {
    id: 16,
    tag: (
      <img
        src="https://img.freepik.com/premium-photo/handsome-model-portrait_927851-8900.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid"
        className="pickImg mediaItem"
      />
    ),
    url: "https://img.freepik.com/premium-photo/handsome-model-portrait_927851-8900.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    name: "Men's Sunglasses",
    price: "1200",
    pricefake: "2000",
    discount: "40",
    rating: 3.9,
    description:
      "Stylish and protective men's sunglasses, perfect for sunny days.",
  },
];

export const offers = [
  "Bank Offer: 10% Instant Discount upto ₹500 on first Flipkart Pay Later EMI Transaction",
  "Bank Offer: 5% Cashback on Flipkart Axis Bank Card",
  "Bank Offer: 10% off up to ₹750 on ICICI Bank Debit Card Transactions, on orders of ₹5,000 and above",
  "Special Price: Get extra ₹600 off (price inclusive of cashback/coupon)",
];

export default Data;
