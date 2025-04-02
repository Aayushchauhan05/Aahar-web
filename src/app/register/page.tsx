"use client"; // Ensure animations work in Next.js App Router

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { addDocument } from "@/utils/firebase/firestoreFunctions";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Aahaarpreneur");
  const tabs = ["Aahaarpreneur", "User"];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyles, setIndicatorStyles] = useState({ width: 0, left: 0 });

  useLayoutEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      setIndicatorStyles({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft,
      });
    }
  }, [activeTab]);

  const [loading, setLoading] = useState(false);

const handleSubmit = async (event: React.FormEvent, type: string) => {
  event.preventDefault();
  setLoading(true);

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const endpoint =
    type === "Aahaarpreneur"
      ? "https://aahar-web-backend.vercel.app/aahaarpreneur"
      : "https://aahar-web-backend.vercel.app/user";

  try {
    
// const id= type==="Aahaarpreneur"? await addDocument("users",{...data,role:"vendor_id"}):await addDocument("users",{...data,role:"user_id"});
// const updatedData= type==="Aahaarpreneur"?{...data,vendor_id:id}:{...data,user_id:id}

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to submit data");

    alert("Form submitted successfully!");
    form.reset(); 
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex flex-col items-center flex-grow bg-gradient-to-b from-yellow-200 to-white p-6">
      <div className="relative flex space-x-6 bg-yellow-200/80 backdrop-blur-md p-2 rounded-full shadow-md border border-yellow-300">
        <motion.div
          layoutId="tabBackground"
          className="absolute top-1.5 bottom-1.5 bg-[#FFC300] rounded-full shadow-md"
          initial={false}
          animate={indicatorStyles}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        />
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => { tabRefs.current[index] = el; }}
            className={`relative z-10 px-6 py-1 text-lg text-center font-semibold transition-all duration-300 ${
              activeTab === tab ? "text-black" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6 p-6 w-full max-w-lg text-center rounded-xl relative min-h-[380px] overflow-hidden bg-yellow-100 border border-[#FFC300] shadow-lg">
        <motion.div className="relative w-full h-full">
          {activeTab === "Aahaarpreneur" && (
            <motion.div className="w-full text-gray-800 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <form className="flex flex-col space-y-4 text-left" onSubmit={(e) => handleSubmit(e, "Aahaarpreneur")}>
                <h2 className="text-2xl font-bold text-center text-[#FFC300] mb-4">Aahaarpreneur Form</h2>
                <input name="name" type="text" placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded-md" required />
                <input name="phone" type="tel" placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded-md" required />
                <textarea name="address" placeholder="Enter your address" className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none" required></textarea>
                <input name="email" type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md" required />
                <input name="mess_name" type="text" placeholder="Enter your mess name" className="w-full p-2 border border-gray-300 rounded-md" required />
                <input name="menu" type="file" className="w-full p-2 border border-gray-300 rounded-md" />
                <textarea name="mess_address" placeholder="Enter your mess address" className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none" required></textarea>
                <button type="submit" className="w-full bg-[#FFC300] text-black font-medium py-2 rounded-md hover:bg-yellow-400 transition">Submit</button>
              </form>
            </motion.div>
          )}
          {activeTab === "User" && (
            <motion.div className="w-full text-gray-800 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <form className="flex flex-col space-y-4 text-left" onSubmit={(e) => handleSubmit(e, "User")}>
                <h2 className="text-2xl font-bold text-center text-[#FFC300] mb-4">User Information</h2>
                <input name="name" type="text" placeholder="Enter your name" className="w-full p-2 border border-gray-300 rounded-md" required />
                <input name="email" type="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded-md" required />
                <input name="phone" type="tel" placeholder="Enter your phone number" className="w-full p-2 border border-gray-300 rounded-md" required />
                <textarea name="address" placeholder="Enter your address" className="w-full p-2 border border-gray-300 rounded-md h-20" required></textarea>
                <input name="price_range" type="text" placeholder="Price Range (0 - 150)" className="w-full p-2 border border-gray-300 rounded-md" />
                <button
  type="submit"
  className="w-full bg-[#FFC300] text-black font-medium py-2 rounded-md hover:bg-yellow-400 transition flex justify-center items-center"
  disabled={loading}
>
  {loading ? "Submitting..." : "Submit"}
</button>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
