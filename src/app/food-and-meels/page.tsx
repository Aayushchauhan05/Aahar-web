"use client"; // Ensure animations work in Next.js App Router
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
``;

const Page = () => {
  // Sample data for MessCard
  const messData = [
    {
      image: "/food/rajma.png",
      name: "Shyam Mess",
      meal: "North Indian",
      rating: 4.5,
    },
    {
      image: "/food/spl_rice.png",
      name: "Aahaar Kitchen",
      meal: "South Indian",
      rating: 4.8,
    },
    {
      image: "/food/healthy.png",
      name: "Healthy Meals",
      meal: "Healthy Options",
      rating: 4.7,
    },
    {
      image: "/food/aloo.png",
      name: "Aloo Kitchen",
      meal: "Vegetarian",
      rating: 4.6,
    },
    {
      image: "/food/spl_puri.png",
      name: "Puri Palace",
      meal: "North Indian",
      rating: 4.2,
    },
    {
      image: "/food/south_meal.png",
      name: "South Meal Hub",
      meal: "South Indian",
      rating: 4.9,
    },
    {
      image: "/food/chole.png",
      name: "Chole Corner",
      meal: "Vegetarian",
      rating: 4.3,
    },
    {
      image: "/food/paneer.png",
      name: "Paneer Paradise",
      meal: "Vegetarian",
      rating: 4.8,
    },
  ];

  return (
    <div className="">
      <motion.div
      >
        <div className="bg-gradient-to-b from-yellow-300 to-white pt-12">
          {/* Page Title */}
          <motion.h1
            className="text-4xl font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Food and Meals
          </motion.h1>

          <motion.p
            className="text-lg text-center mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover a variety of delicious meals and food options. From healthy
            and nutritious dishes to indulgent treats, we bring you the best of
            homemade food crafted with love and care. Explore our menu and find
            something for every taste and occasion.
          </motion.p>

          {/* Feature Tags */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              "Homemade Quality",
              "Empowered Homemakers",
              "Sustainable Food Practices",
              "Fresh Ingredients",
              "Authentic Recipes",
              "Affordable Prices",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-auto px-6 mx-4 sm:mx-0 py-3 bg-white shadow-md rounded-full text-yellow-900 font-medium text-base flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-lg">✨</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[1300px] mx-auto">
          {/* Eat Your Food Section */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-orange-700">
              Eat the Home made food
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Enjoy the taste of homemade food delivered right to your doorstep.
              Our meals are prepared with the finest ingredients and a touch of
              tradition to bring you the comfort of home-cooked food.
            </p>

            {/* Food Images */}
            <motion.div
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              {[
                { name: "Healthy", src: "/food/healthy.png" },
                { name: "Rajma", src: "/food/rajma.png" },
                { name: "Spl Rice", src: "/food/spl_rice.png" },
                { name: "Aloo", src: "/food/aloo.png" },
                { name: "Spl Puri", src: "/food/spl_puri.png" },
                { name: "South Meal", src: "/food/south_meal.png" },
                { name: "Chole", src: "/food/chole.png" },
                { name: "Paneer", src: "/food/paneer.png" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded-full shadow-lg border border-yellow-300"
                  />
                  <p className="mt-2 text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold text-center mt-10">Our Mess</h2>
            <p className="text-lg text-center mt-4">
              Explore our selection of messes offering a variety of delicious
              meals and food options. From healthy and nutritious dishes to
              indulgent treats, we bring you the best of homemade food crafted
              with love and care.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {messData.map((item, index) => {
                const delay = (index % 4) * 0.1; // Reset delay for each row
                return (
                  <MessCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    meal={item.meal}
                    rating={item.rating}
                    price={120} // Example price
                    delay={delay}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

const MessCard = ({
  image,
  name,
  meal,
  rating,
  price,
  delay,
}: {
  image: string;
  name: string;
  meal: string;
  rating: number;
  price: number;
  delay: number; // New delay prop
}) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden w-full border relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }} // Apply delay
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600">{meal}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-1 text-yellow-500">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <span className="text-gray-700 text-sm">{rating}</span>
          </div>
          <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">
            {price}Rs
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <motion.button
            className="bg-purple-700 text-white px-3 py-1 text-sm rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
