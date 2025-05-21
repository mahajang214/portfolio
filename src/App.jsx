import React, { useState } from "react";
import logo from "/home/gaurav/Downloads/myPortfolioLogo.jpg";
import { motion } from "motion/react";
import gradient from "./assets/Gradient.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full overflow-hidden py-0  ">
      {/* Navbar */}
      <nav className="w-full bg-[#1A0B2E] flex justify-center items-center">
        <div className="w-[85vw] sm:w-[65vw] flex justify-between items-center">
          <div className=" overflow-hidden px-2 rounded w-12 h-12 flex justify-center items-center">
            <img
              className="w-[6vw] h-auto scale-[5]"
              src={`${logo}`}
              alt="Gaurav"
            />
          </div>
          <ul className="hidden sm:flex  gap-8 text-white">
            <li className="hover:text-[#2FC0F5] transaal cursor-pointer transition-all duration-200 border-b-2 border-transparent  hover:border-[#2FC0F5]  ">
              Home
            </li>
            <li className="hover:text-[#2FC0F5] transaal cursor-pointer transition-all duration-200 border-b-2 border-transparent  hover:border-[#2FC0F5]  ">
              GitHub
            </li>
            <li className="hover:text-[#2FC0F5] transaal cursor-pointer transition-all duration-200 border-b-2 border-transparent  hover:border-[#2FC0F5]  ">
              Resume
            </li>
            <li className="hover:text-[#2FC0F5] transaal cursor-pointer transition-all duration-200 border-b-2 border-transparent  hover:border-[#2FC0F5]  ">
              Contact ME
            </li>
          </ul>

          <button
            onClick={handleMenuClick}
            className={`w-[8vw] h-[4.5vh] cursor-pointer flex flex-col items-center justify-center md:hidden px-[1px] rounded transition-all duration-200 ${
              isOpen ? `gap-0` : `gap-[2px]`
            }`}
          >
            {/* Top Bar */}
            <motion.span
              initial={false}
              animate={{ y: isOpen ? -6 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-[3px] bg-white rounded-full block"
            ></motion.span>

            {/* Middle Bar (appears on click) */}
            <motion.span
              initial={false}
              animate={{
                scaleY: isOpen ? 1 : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-[97.5%] h-[3px] bg-white rounded-full origin-center"
            ></motion.span>

            {/* Bottom Bar */}
            <motion.span
              initial={false}
              animate={{ y: isOpen ? 6.8 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-[3px] bg-white rounded-full block"
            ></motion.span>
          </button>
        </div>
      </nav>
      {/* Aside bar menu  */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: isOpen ? 0 : "100%",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="fixed top-0 right-0 h-full w-[80%] bg-white shadow-lg z-50"
      >
        <div className="p-4 w-full h-full bg-[#11071F]">
          <motion.button
            onClick={handleMenuClick}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 p-[2px] mr-[14%] hover:text-red-500 cursor-pointer rounded border-[1px] hover:border-red-500 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ul className="space-y-6">
              {["Home", "Properties", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer text-lg font-medium hover:text-[#8a8af0] transition-colors duration-300 text-white"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* All Sections */}
      {/*  */}
      <div
        className=" 
bg-[#11081F]
      
      w-full flex justify-center items-center flex-col"
      >
        {/* 1st Section */}
        <div className=" w-[85vw] sm:w-[65vw] h-screen  text-white flex justify-center items-center ">
          <h1 className="text-[60px]  w-full text-center leading-13">
            I'm <br /> Gaurav Mahajan
          </h1>
        </div>

        {/* 2nd Section */}
        <div className=" w-[85vw] sm:w-[65vw] h-screen  text-white flex justify-center items-center  flex-col">
          <h1 className="mb-10 text-3xl">About ME</h1>
          <p>
            Hey there! I'm Gaurav Mahajan, a passionate MERN stack developer on
            a mission to create the world’s best websites — and one day, earn
            the title of the world’s best web developer.
            <br />
            <br />
            I breathe life into ordinary websites by blending powerful code with
            creative design, bold design, and even 3D elements. I mix creativity
            with security because Security is never an afterthought in my work.
            I'm skilled in cybersecurity tools like Burp Suite, Wireshark, Nmap,
            Hydra etc. which I use to analyze vulnerabilities in my own websites
            and patch them before attackers can even try. That’s why the
            websites I build are not just stunning — They're designed with
            robust security measures to withstand potential attacks.
            <br />
            <br />✨ what else I can do? You should really check out my skills
            section.
          </p>
        </div>

        {/* 3rd Section */}
        <div className=" w-[85vw] sm:w-[65vw] h-screen  text-white flex justify-center items-center  flex-col">
              <div className="relative">
                <img className="absolute top-0 left-0 -z-10" src={`${gradient}`} alt="gradient" />
              <h1 className="md:text-2xl text-[20px] z-10 text-center w-full">I’m looking for an opportunity to contribute to a mission-driven team  </h1>
              <p className="text-center w-full mt-1 text-[15px]">where design and development come together to <span className="underline">improve lives </span> and solve <span className="underline">real-world problems</span>.</p>
              </div>
        </div>

      </div>
    </div>
  );
}

export default App;
