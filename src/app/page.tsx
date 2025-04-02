"use client";

import { Services } from "@/components/Services";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-b from-yellow-200 to-white p-6 pt-12 pl-10 flex flex-col lg:flex-row">
        <div className="flex-1">
          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className=""
          >
            <h1 className="text-4xl md:text-4xl font-extrabold flex justify-center items-center lg:block bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
              Aahaar - Maa ke Haath ka Khana
            </h1>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed lg:text-left text-center">
              Aahaar is a unique platform designed to bridge the gap between
              homemakers and people by providing access to fresh, wholesome,
              homemade meals. Unlike restaurant-focused platforms, Aahaar
              emphasizes the warmth, quality, and nutrition of home-cooked food.
            </p>
          </motion.section>

          {/* Decorative Divider */}
          <div className="w-full my-8 flex justify-center items-center lg:block">
            {/* <svg className="h-10 text-yellow-400" viewBox="0 0 1440 320">
            <path
              fill="currentColor"
              d="M0,128L120,112C240,96,480,64,720,96C960,128,1200,224,1320,272L1440,320V0H0Z"
            ></path>
          </svg> */}
            <div className="flex space-x-4">
              {["paneer.png", "rice.png", "thali.png"].map((src, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`/decorator/${src}`}
                    alt="Decorator"
                    height={200}
                    width={110}
                    className=""
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="">
            {/* Left Content (Text) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="z-10"
            >
              {/* <h2 className="text-3xl font-bold text-yellow-900">
              About Our Startup
            </h2> */}
              <p className="mt-2 text-lg">
                Aahaar bridges the gap between homemakers and people seeking
                fresh, homemade meals.
              </p>
              <ul
                className="list-disc pl-5 mt-3 space-y-2"
                style={{ fontSize: "17px" }}
              >
                <li>Foster a community-driven approach to meal preparation.</li>
                <li>Reduce food waste by aligning demand with availability.</li>
                <li>
                  Promote a healthier alternative to fast food and restaurant
                  meals.
                </li>
              </ul>
              <p className="mt-4 text-lg">
                Aahaar is more than just a food delivery service—it's a mission
                to create a sense of belonging and care.
              </p>
              <motion.div
                // whileHover={{ scale: 1.1, rotate: 2 }}
                // whileTap={{ scale: 0.95 }}
                className="mt-4 py-3"
              >
                <Link
                  href="https://chat.whatsapp.com/LWRYKSkfHPdEeRVmyRlfMA"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all"
                >
                  Join Our Aahaar Family
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center lg:translate-x-44"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden flex space-x-6"
          >
            <Image
              src="/landing.png"
              alt="Homemaker"
              width={300}
              height={300}
              className="xl:w-[800px] w-[600px] lg:w-[600px] md:block object-cover transition-transform duration-300"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 90%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 90%)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-gradient-to-b from-white to-gray-300 p-6">
        {/* Services Section */}
        <Services />
        {/* Unique Approach Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center my-10 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-yellow-900">
            What Makes Us Unique?
          </h2>
          <p className="mt-3 text-gray-800 max-w-2xl mx-auto text-lg">
            More than just food delivery, Aahaar brings warmth and care to every
            meal, ensuring it feels just like home. Our platform empowers home
            chefs, reducing food waste while providing a healthier alternative
            to fast food.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {[
              "Homemade Quality",
              "Empowered Homemakers",
              "Sustainable Food Practices",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-white shadow-md rounded-full text-yellow-900 font-medium text-base flex items-center space-x-2"
              >
                <span className="text-lg">✨</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Advantages Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <h2 className="text-3xl font-bold text-orange-700">
            Why Choose Aahaar?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              { title: "Emotional Connect", icon: "💛", bg: "bg-yellow-200" },
              { title: "Cost-Effective Meals", icon: "💰", bg: "bg-green-200" },
              {
                title: "Healthy & Hygienic Food",
                icon: "🥗",
                bg: "bg-blue-200",
              },
              {
                title: "Employment for Delivery Partners",
                icon: "🚴",
                bg: "bg-pink-200",
              },
              {
                title: "Fast & Reliable Delivery",
                icon: "⚡",
                bg: "bg-purple-200",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`px-4 py-2 flex items-center space-x-2 rounded-full ${advantage.bg} text-black font-medium text-sm shadow-md transition-all cursor-pointer`}
              >
                <span className="text-xl">{advantage.icon}</span>
                <span>{advantage.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Aaharpreneur Section */}
        <motion.section
          initial={{ opacity: 0, scale: 1, y: 50 }} // Start more noticeably down and smaller
          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Smooth scale-up and lift
          transition={{
            duration: 0.8, // Make it slightly faster
            ease: "easeOut", // Smooth easing
          }}
          viewport={{ once: true }} // Ensures it animates only once
          className="text-center p-6 rounded-lg mt-10"
        >
          <h2 className="text-2xl font-bold text-orange-800">
            Become an Aaharpreneur
          </h2>
          <p className="mt-3 text-gray-700 text-sm">
            Join us in empowering homemakers and making healthy food accessible
            to all.
          </p>
          <div className="mt-4 flex justify-center">
            <Link
              href="/register"
              className="mt-4 px-5 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition-all hover:scale-110"
            >
              Get Started
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
