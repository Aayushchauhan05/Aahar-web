"use client"; // Ensure animations work in Next.js App Router

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandshake,
  faBowlFood,
  faTruckFast,
  faUtensils,
  faHeart,
  faSackDollar,
  faChartBar,
  faPeopleCarryBox,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const services = [
  { text: "Large Network of Vendors and Customers", icon: faClipboardList, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
  { text: "Hassle-Free Process for Homemakers", icon: faSackDollar, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
  { text: "Reliable and Fast Delivery Service", icon: faTruckFast, color: "text-[#C1D502]", bg: "border-[#C1D502]" },
  { text: "Cost-Effective Meals for everyone", icon: faBowlFood, color: "text-[#3ABF38]", bg: "border-[#3ABF38]" },
  { text: "Empowering Homemakers", icon: faUsers, color: "text-[#D12F2F]", bg: "border-[#D12F2F]" },
  { text: "Emotional Connect with the food you eat", icon: faHeart, color: "text-[#D12F2F]", bg: "border-[#D12F2F]" },
  { text: "Employment opportunities for delivery partners", icon: faPeopleCarryBox, color: "text-[#3ABF38]", bg: "border-[#3ABF38]" },
  { text: "Healthy and Hygienic food", icon: faUtensils, color: "text-[#C1D502]", bg: "border-[#C1D502]" },
  { text: "Comfort of Home-Cooked Food", icon: faHandshake, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
  { text: "Customization Options", icon: faChartBar, color: "text-[#18A9C8]", bg: "border-[#18A9C8]" },
];

export const Services = () => {
  return (
    <div className="w-full text-black py-16 px-6 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide text-gray-900">
          Our <span className="text-[#18A9C8]">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Left Side Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 text-right md:text-right"
          >
            {services.slice(0, 5).map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row-reverse items-center md:justify-end space-x-0 md:space-x-5 space-y-3 md:space-y-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full border-4 ${service.bg} shadow-md hover:scale-105 transition-all`}
                >
                  <FontAwesomeIcon icon={service.icon} className={`text-3xl ${service.color}`} />
                </div>
                <p className="w-full md:w-56 text-lg md:mx-2 font-medium text-gray-700 text-center">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Illustration */}
          <div className="hidden md:flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/service.png"
                alt="Illustration"
                width={250}
                height={250}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Right Side Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 text-left md:text-left"
          >
            {services.slice(5).map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center md:justify-start space-x-0 md:space-x-5 space-y-3 md:space-y-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full border-4 ${service.bg} shadow-md hover:scale-105 transition-all`}
                >
                  <FontAwesomeIcon icon={service.icon} className={`text-3xl ${service.color}`} />
                </div>
                <p className="w-full md:w-56 text-lg font-medium text-gray-700 text-center md:text-left">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
