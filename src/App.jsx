import React, { useState } from "react";
import logo from "/home/gaurav/Downloads/myPortfolioLogo.jpg";
import { motion } from "motion/react";
import gradient from "./assets/Gradient.png";
import elipse21 from "./assets/Ellipse 21.png";
import elipse22 from "./assets/Ellipse 22.png";
import elipse23 from "./assets/Ellipse 23.png";

import soldity from "./assets/solidity.png";
import hardhat from "./assets/hardhat.png";
import alchemy from "./assets/alchemy.png";
import chai from "./assets/chai.png";
import mocha from "./assets/mocha.png";
import etherjs from "./assets/etherJS.png";
import metamask from "./assets/metamask.png";

import remix from "./assets/remix.png";

import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Loading from "./Loading";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Notification from './Notification';

import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


// Register the plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrambleTextPlugin);


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFirstProject, setOpenFirstProject] = useState(false);
  const [openSecondProject, setOpenSecondProject] = useState(false);

  <Toaster position="top-right" reverseOrder={false} />;

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [msg, setMsg] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [isMessageLoading, setIsMessageLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message) {
      return setNotification({ type: "error", message: "Message is Empty." });
    }
    if (!formData.email) {
      return setNotification({ type: "error", message: "Email is Empty." });
    }
    if (!formData.name) {
      return setNotification({ type: "error", message: "Name is Empty." });
    }
    if (!formData.number) {
      return setNotification({ type: "error", message: "Number is Empty." });
    }
    try {
      setIsMessageLoading(true);
      const sendMail = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/send-mail`,
        formData
      );
      console.log(sendMail.data);
      setIsMessageLoading(false);

      return setNotification({
        type: "success",
        message: "Message sent successfully!",
      });
    } catch (error) {
      setIsMessageLoading(false);
      console.error(error.message);
      return setNotification({
        type: "error",
        message: "Failed to send message.",
      });
    }
    // const res = await fetch("http://localhost:5000/send-email", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // const data = await res.json();
    // alert(data.message);
  };

  const feedbackHandler = async (e) => {
    e.preventDefault();
    if (!msg) {
      return setNotification({ type: "error", message: "Feedback is Empty." });
    }
    try {
      setIsFeedbackLoading(true);
      const sendFeedback = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/feedback`,
        { message: msg }
      );
      console.log(sendFeedback.data);
      setIsFeedbackLoading(false);

      setNotification({
        type: "success",
        message: "Feedback sended successfully!",
      });
      setTimeout(() => {
        setNotification({ type: "success", message: "Thanks for feedback" });
      }, 4000);
    } catch (error) {
      setIsFeedbackLoading(false);
      console.error(error.message);
      return setNotification({
        type: "error",
        message: "Failed to send feedback.",
      });
    }
  };

  useGSAP(() => {
    const sections = gsap.utils.toArray("#section");
    const media = gsap.matchMedia();

    const split = new SplitText(".firstText", {
      type: "words,chars",
    });

    const aboutME = new SplitText(".aboutMe", {
      type: "words,chars",
    });

    const s3Text = new SplitText(".s3Text", {
      type: "words,chars",
    });

    const s3Para = new SplitText(".s3Para", {
      type: "words,chars",
    });

    const techStack = new SplitText(".techStack", {
      type: "words,chars",
    });

    

    

    
    const aboutPara = new SplitText(".aboutMePara", {
      type: "words,chars",
    });
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#scrollContainer",
        start: "top top",
        pin: true,
        scrub: 0.5,
        markers: false,
        end: () => "+=" + window.innerWidth * (sections.length - 1),
      },
    });

     // Mobile animation
     media.add("(max-width: 480px)", () => {
      gsap.from(split.words, {
        duration: .8,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "back.out",
      });
     });

     gsap.from(aboutME.chars, {
      opacity: 0,
      y: -100,
      x: 100,
      stagger: 0.1,
      ease: "back.out",
      scrollTrigger: {
        trigger: aboutME.chars,
        markers: false,
        start: "800% 100%",
        end: "1000% 80%",
        scrub: 1,
      },
    });

    gsap.from(aboutPara.words, {
      // duration: 1,
      opacity: 0,
      y: 70,
      rotateZ:"50",
      stagger: 0.1,
      ease: "back.out",
      // pin:true,
      scrollTrigger: {
        trigger: aboutPara.words,
        markers: false,
        start: "1200% 95%",
        end: "1400% 75%",
        scrub: 1.5,
      },
    });

    gsap.from(s3Text.words, {
      // duration: 1,
      opacity: 0,
      x: 500,
      stagger: 0.1,
      // ease: "back.out",
      scrollTrigger: {
        trigger: s3Text.words,
        markers: false,
        start: "0% 90%",
        end: "400% 70%",
        scrub: 1,
      },
    });

    gsap.from(s3Para.chars, {
      // duration: 1,
      // opacity: 0,
      scale:0,
      y: 50,
      stagger: 0.1,
      // ease: "back.out",
      scrollTrigger: {
        trigger: s3Para.chars,
        markers: false,
        start: "0% 90%",
        end: "400% 70%",
        scrub: 1,
      },
    });

    gsap.from(techStack.chars, {
      // duration: 1,
      scale: 0,
      rotateZ: 200,
      x: 100,
      y: -100,
      stagger: 0.1,
      ease: "back.out",
      scrollTrigger: {
        trigger: techStack.chars,
        markers: false,
        start: "3300% 90%",
        end: "3500% 70%",
        scrub: 1,
      },
    });

    gsap.from(".uiService",{
      opacity:0,
      scale:0,
      stagger: 0.4,
      // ease: "back.out",
      scrollTrigger: {
        trigger: ".uiService",
        markers: false,
        start: "0% 80%",
        end: "100% 70%",
        scrub: 1,
      },
    });

    gsap.set(
      [".frontend","blockchain", ".backend", ".os", ".dev", ".hosting", ".cybertools"],
      {
        scale: 1,
        opacity: 1,
        y: 0,
        x: 0,
        borderRadius: 10,
      }
    );

    gsap.from(".frontend", {
      // borderRadius: 50,
      // scale: 0.1,
      x: 500,
      opacity: 0,
      // ease: "back.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".frontend",
        start: "0px 100%",
        end: "1000px 0%",
        markers: false,
        scrub: 1,
      },
    });

    gsap.from(".backend", {
      
      x: -500,
      opacity: 0,
      ease: "back.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".backend",
        start: "0px 80%",
        end: "400px 70%",
        markers: false,
        scrub: 1,
      },
    });

    gsap.from(".blockchain", {
      borderRadius: 100,
      scale: 0.1,
      // x: -1000,
      // opacity: 0,
      ease: "back.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".blockchain",
        start: "0px 80%",
        end: "200px 65%",
        markers: false,
        scrub: 1,
      },
    });


    gsap.from(".os", {
      
      rotateX:"100",
      ease: "back.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".os",
        start: "0px 80%",
        end: "100px 70%",
        markers: false,
        scrub: 1,
      },
    });

    gsap.from(".dev", {
      borderRadius: 50,
      scale: 0.1,
      x: 1000,
      opacity: 0,
      ease: "back.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".dev",
        start: "0px 80%",
        end: "100px 70%",
        markers: true,
        scrub: 1,
      },
    });








  });

  return (
    <div className="w-full bg-[#11081F]  mt-0 mb-0  ">
      {/* is upar wali me bhi overflow hidden he */}
      <div className="w-full overflow-hidden py-0  ">
        {/* Navbar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full bg-[#070E16] flex justify-center items-center"
        >
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
        </motion.nav>
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
                {["Home", "Github", "Resume", "Contact ME"].map(
                  (item, index) => (
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
                  )
                )}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* All Sections */}
        {/*  */}
        <div
          className=" 
        bg-[#11081F]    
          w-full flex justify-center items-center overflow-hidden flex-col"
        >
          {/* 1st Section */}
          <div className=" w-[85vw] sm:w-[65vw] h-screen  text-white flex justify-center items-center ">
            <div className="relative">
              <img
                className="absolute top-28 -left-70 z-0 scale-200 "
                src={`${gradient}`}
                alt=""
              />
              <img
                className="absolute -top-58 left-80 z-0 scale-200 "
                src={`${gradient}`}
                alt=""
              />

              <h1 className="firstText text-[60px]  w-full backdrop-blur-xs text-center z-0  leading-13">
                I'm <br /> Gaurav Mahajan
              </h1>
            </div>
          </div>

          {/* 2nd Section */}
          <div className=" w-[85vw] sm:w-[65vw] h-screen  text-white flex justify-center items-center  flex-col">
            <h1 className="aboutMe mb-10 text-[45px]">About ME</h1>
            <p className="aboutMePara">
              Hey there! I'm Gaurav Mahajan, a passionate MERN stack developer
              on a mission to create the world’s best websites — and one day,
              earn the title of the world’s best web developer.
              <br />
              <br />
              I breathe life into ordinary websites by blending powerful code
              with creative design, bold design, and even 3D elements. I mix
              creativity with security because Security is never an afterthought
              in my work. I'm skilled in cybersecurity tools like Burp Suite,
              Wireshark, Nmap, Hydra etc. which I use to analyze vulnerabilities
              in my own websites and patch them before attackers can even try.
              That’s why the websites I build are not just stunning — They're
              designed with robust security measures to withstand potential
              attacks.
              <br />
              <br />✨ what else I can do? You should really check out my skills
              section.
            </p>
          </div>

          {/* 3rd Section */}
          <div className=" w-[85vw] sm:w-[65vw] h-screen  text-white flex justify-center items-center  flex-col">
            <div className="relative  ">
              <img
                className="absolute -top-50 scale-200 left-70 z-0"
                src={`${gradient}`}
                alt="gradient"
              />
              <img
                className="absolute top-10 scale-200 -left-80 z-0"
                src={`${gradient}`}
                alt="gradient"
              />
              <div className=" z-1 ">
                <h1 className="s3Text md:text-2xl text-[30px] leading-7  backdrop-blur-xs  text-center w-full">
                  Helping startups and businesses scale with full-stack website and Web3 solutions to increase revenue.
                </h1>
                <p className="s3Para text-center w-full mt-3 text-md">
                Design and development with   
                  <span className="backdrop-blur-xs mx-1 font-bold ">
                  purpose — built
                  </span>
                  to 
                  <span className="backdrop-blur-xs mx-1 font-bold ">
                  solve real problems.
                  </span>
                  
                </p>
              </div>
            </div>

            {/* bakchodi ka gola */}
            {/* <div className="relative border-2 border-amber-200 h-[35vh] w-full mt-[40vh] flex justify-center items-center ">
            <div className=" rounded-full   ">
              <img
                className="absolute top-0 left-0 z-0 scale-120 "
                src={`${gradient}`}
                alt=""
              />

              <div className=" rounded-full z-1  w-[35vw] h-auto backdrop-blur-xs overflow-hidden">
                <img
                  className=" w-[35vw] h-auto rounded-full scale-[3.5]"
                  src={`${logo}`}
                  alt="logo"
                />
              </div>
              {/* <img className="absolute top-35 left-0 z-0  " src={`${elipse21}`} alt="" /> */}

            {/* </div> */}

            {/* <img className="aboslute top-30 left-0 "  src={`${elipse22}`} alt="" />
              <img className="aboslute top-10 left-0 "  src={`${elipse23}`} alt="" /> */}

            {/* </div> */}
          </div>

          {/* 4th Section tech stack */}
          <div className="w-[85vw] sm:w-[65vw]  text-white flex justify-center items-center relative flex-col">
            {/* horizontal div */}
            <h1 className=" techStack text-4xl mb-6">Tech Stack</h1>
            <div className="w-full relative flex justify-center items-center flex-col ">
              {/* UI/UX  */}

              <div className="uiService bg-linear-to-tl to-[#ffffff35] border-2  border-[#ffffff30]  py-4 w-full   rounded-2xl backdrop-blur-2xl">
                <h1 className="text-center text-3xl sm:text-4xl text-white">
                  UI/UX
                </h1>
                <div className="w-full   flex mt-3 flex-col justify-center items-center">
                  <img
                    className="ui-ux-services w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto overflow-hidden rounded-full"
                    src="data:image/jpeg;base64,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"
                    alt="Lunacy"
                    loading="lazy"
                  />
                  <h1 className="text-[#FFFFFF] bg-[#2EA8E9] rounded-md px-3 py-1 mt-5 sm:mt-2">
                    Lunacy
                  </h1>
                </div>
              </div>
              {/* Services */}
              <div className="uiService bg-linear-to-tl to-[#ffffff35] border-2   border-[#ffffff30] py-4 w-full mt-4  rounded-2xl backdrop-blur-2xl">
                <h1 className="text-center  text-3xl sm:text-4xl text-white backdrop-blur-2xl">
                  Service
                </h1>
                <div className="w-full flex mt-3 flex-col justify-center items-center backdrop-blur-2xl">
                  <img
                    className="ui-ux-services w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto overflow-hidden rounded-full backdrop-blur-2xl "
                    src="data:image/jpeg;base64,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"
                    alt="Appwrite"
                  />
                  <h1 className="text-[#F9336A] bg-[#331D26] rounded-md px-3 py-1  mt-5 sm:mt-2">
                    Appwrite
                  </h1>
                </div>
              </div>

              {/* gradients */}
              <div>
              <img
                className="absolute top-1200 left-90 scale-200 "
                src={`${gradient}`}
                alt=""
              />

              <img
                className="absolute top-150 left-70 scale-200 "
                src={`${gradient}`}
                alt=""
              />

              <img
                className="absolute top-500 -left-70 scale-200 "
                src={`${gradient}`}
                alt=""
              />

              <img
                className="absolute top-700 left-70 scale-200 "
                src={`${gradient}`}
                alt=""
              />

              <img
                className="absolute top-1000 -left-90 scale-200 "
                src={`${gradient}`}
                alt=""
              />

              <img
                className="absolute top-1200 left-90 scale-200 "
                src={`${gradient}`}
                alt=""
              />
              </div>

              {/* frontend */}
              <div className=" backdrop-blur-2xl w-full bg-linear-to-tl to-[#ffffff18] border-[1.5px]   border-[#ffffff40]   py-5 mt-7 rounded-2xl">
                <h1 className="text-white text-3xl sm:text-4xl text-center">
                  Frontend
                </h1>
                <div className="w-full py-1  mt-3  flex justify-center items-center ">
                  <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-2">
                    <div
                      id="html"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <svg
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto "
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <polygon
                          fill="#FF5722"
                          points="32,0 72.8,460.8 256,512 439.136,460.832 480,0 "
                        ></polygon>
                        <polygon
                          fill="#FAFAFA"
                          points="391.52,150.688 256,150.688 176.8,150.688 181.92,208.576 256,208.576 386.4,208.576 
	371.008,382.144 256,414.24 255.904,414.272 140.96,382.144 132.928,291.36 189.248,291.36 193.44,338.464 255.936,355.456 
	256,355.424 256,355.424 318.56,338.432 325.088,265.12 256,265.12 256,265.12 130.624,265.12 115.456,94.208 256,94.208 
	396.512,94.208 "
                        ></polygon>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                      <h1 className="text-white rounded-md bg-[#FF5722] px-3 py-1 mt-2">
                        HTML5
                      </h1>
                    </div>

                    <div
                      id="css"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <svg
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <polygon
                          fill="#2196F3"
                          points="32,0 72.8,460.8 256,512 439.136,460.832 480,0 "
                        ></polygon>
                        <polygon
                          fill="#FAFAFA"
                          points="392.768,150.688 387.616,208.576 372.064,382.112 256,414.208 255.904,414.24 
	139.904,382.112 131.808,291.36 188.64,291.36 192.864,338.432 255.936,355.456 255.968,355.424 319.136,338.4 327.744,259.968 
	129.088,260.512 123.456,206.88 332.512,204.416 336.736,147.008 117.856,147.616 114.176,94.208 256,94.208 397.824,94.208 "
                        ></polygon>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                      <h1 className="text-white bg-[#2196F3] rounded-md px-3 py-1 mt-2">
                        Css3
                      </h1>
                    </div>

                    <div
                      id="javascript"
                      className="h-full w-[20vw]  lg:w-[20vw] flex justify-center flex-col items-center rounded-2xl"
                    >
                      <svg
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="JavaScript"
                        role="img"
                        viewBox="0 0 512 512"
                      >
                        <rect
                          width="512"
                          height="512"
                          rx="15%"
                          fill="#f7df1e"
                        ></rect>
                        <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path>
                      </svg>
                      <h1 className="text-black bg-[#F7DF1E] rounded-md px-3 py-1 mt-2">
                        Javascript
                      </h1>
                    </div>

                    <div
                      id="tailwindCss"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex justify-center flex-col items-center rounded-2xl"
                    >
                      <img
                        className=" frontend w-[20vw] rounded-2xl sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/png;base64,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"
                        alt="Tailwindcss"
                        loading="lazy"
                      />
                      <h1 className="text-[#16BECB] bg-[#161D2D] rounded-md px-3 py-1 mt-2">
                        Tailwind-Css
                      </h1>
                    </div>

                    <div
                      id="Bootstrap"
                      className="h-full w-[20vw]  lg:w-[20vw] flex justify-center flex-col items-center  rounded-2xl"
                    >
                      <img
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] rounded-2xl xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/jpeg;base64,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"
                        alt="Bootstrap"
                      />
                      <h1 className="text-white bg-[#6C10F3] rounded-md px-3 py-1 mt-2">
                        Bootstrap
                      </h1>
                    </div>

                    <div
                      id="gsap"
                      className="h-full w-[20vw]  lg:w-[20vw] flex justify-center flex-col items-center rounded-2xl "
                    >
                      <img
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="GSAP"
                      />
                      <h1 className="text-[#08E348] bg-[#0F1110] rounded-md px-3 py-1 mt-2">
                        GSAP
                      </h1>
                    </div>

                    <div
                      id="animejs"
                      className="h-full w-[20vw] lg:w-[20vw] flex justify-center flex-col items-center rounded-2xl "
                    >
                      <img
                        className=" frontend w-[20vw]  sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto  scale-140 rounded-2xl "
                        src="data:image/png;base64,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"
                        alt="Animejs"
                      />
                      <h1 className="text-[#2274F7] bg-[#18212D] rounded-md px-3 py-1 mt-5 ">
                        AnimeJS
                      </h1>
                    </div>

                    <div
                      id="framerMotion"
                      className="h-full flex-col w-[20vw]   lg:w-[20vw] flex justify-center items-center  rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto  rounded-2xl scale-115"
                        src="data:image/png;base64,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"
                        alt="Framer Motion"
                      />
                      <h1 className="text-black bg-white rounded-md px-3 py-1 mt-4">
                        Framer Motion
                      </h1>
                    </div>

                    <div
                      id="threejs"
                      className="h-full w-[20vw]  lg:w-[20vw] flex justify-center flex-col items-center rounded-2xl"
                    >
                      <img
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="React Three Fiber"
                      />
                      <h1 className="text-black bg-white rounded-md px-3 py-1 mt-2">
                        React Three Fiber
                      </h1>
                    </div>

                    <div
                      id="Threejs"
                      className="h-full w-[20vw]  lg:w-[20vw] flex justify-center flex-col items-center rounded-2xl"
                    >
                      <img
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="Threejs"
                      />
                      <h1 className="text-white bg-black rounded-md px-3 py-1 mt-2">
                        Threejs
                      </h1>
                    </div>

                    <div
                      id="axios"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl scale-115"
                        src="data:image/png;base64,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"
                        alt="Axios"
                      />
                      <h1 className="text-white bg-[#1C1C1C] rounded-md px-3 py-1 mt-2">
                        Axios
                      </h1>
                    </div>

                    <div
                      id="accertinity"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="Accertinity"
                      />
                      <h1 className="text-white bg-[#000000] rounded-md px-3 py-1 mt-2">
                        Accertinity
                      </h1>
                    </div>

                    <div
                      id="reactRouterDom"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="React Router Dom"
                      />
                      <h1 className="text-[#D0011A] bg-[#FDFDFD] rounded-md px-3 py-1 mt-2">
                        React Router Dom
                      </h1>
                    </div>

                    <div
                      id="zustand"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="Zustand "
                      />
                      <h1 className="text-[#3E2C24] bg-[#FFFFFF] rounded-md px-3 py-1 mt-2">
                        Zustand
                      </h1>
                    </div>

                    <div
                      id="reactjs"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className=" frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="Reactjs"
                      />
                      <h1 className="text-[#79DAFA] bg-[#000000] rounded-md px-3 py-1 mt-2">
                        Reactjs
                      </h1>
                    </div>

                    <div
                      id="nextjs"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAeFBMVEUAAAD///+Dg4PY2NgvLy9RUVErKyuIiIj8/PyysrLh4eGOjo5ra2s3Nzf5+flFRUVlZWVycnKmpqadnZ3p6ekUFBR6enoZGRnLy8s+Pj4sLCzx8fEmJiZMTEzPz88ICAjExMSwsLBcXFy7u7ugoKCWlpYeHh5YWFgRguI2AAAEjElEQVR4nO3ZaUPiOhiG4VARFKSyL4Isg47//x+eLkla2qwcp3y5ry8zlBDzdHmbpkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgdwzGw9LA2Ww1TDw2suU0WeeStbmjWWn9XH7c+Lr1jCvSc096cjbr93wmzQ6/Tf3M1be70H6f/0na3tXVbBCcVrypLdN2N2v13Y/c0E8flLY3/J20+vilH81edqrxWG15XFq9w/9nWrGVm5aNTjZ7+UV1Gj0wbbqxNotKK1Sq820nT3LzqNrUf3lY2vowzGmXT1b9WuuJyrCo93Ex7NTBTR9yL9U3jd7/WVp7pZJpXZd2nalS6Qr1x/qzcn+8hI49nkyrDsbY0mzg/rpl0TrB39UWxx577SjtWF1qlkoVm7ZVqVbtCtXWVdpE7fr0YGwWnVYsZYfH8qOqUM5JTFdphyKRwzFXqvi0E3XmFpXqonbmX9dvuksr/1TrtlGKT1tVqpkQQ/V/xy1ddJpWn2ymSHekrSrVR0iFynWZVhcSwwT3nrTiLPtbqo5fPT/oMq34lIN6aVequ9LqSiW5H7NEx2kdlUqmfZ2+tRlOBel2XpiefIPpNq24yIGdm81c8+S9vfe3ejv/jLfjtLpSNR/FXWmbjzp131WzxD+YrtPaKtW9aXWl6l0CBtN12mo6e1up7k4rRrLVMWAwnafVjyq3Ge68bvNfqko19w+m+7TiIke3rTeTafcjA89Rm6q9YlmFrPGmnaobwGQ4/0rMU3qXdlpxlKOrV6rI51s1uOIE0ZVq52vvTSu/nMghXr33tAZDWl2p3qptd80uDmnvnP+rKtV+5fmBN21aXDaDfDErza8Q+2KLmSFttTRYLRrelTYvUAv1n5xvMhWYNjuy2+ws/lxGT+5MaQ2V6p60V32CHAIrVWDa7NAWn3YBk9FbxrR6SVhXqjvSqss1X0b7o84W9xQjLO1GpRWnU+SFa06rK5VaNIxPqwMWpXisPjkrVeCxzc7grXNVwMqSVj++zMqP0Wk/GifvVX7c29esg9MW97TRZerqysyWVleqcp04Om1rChVSqQLTZne2omEaMGG5ZUsrZnJ0y+LSiE2rbzp6y0odbMcjfWja7DqZj/L+9r9z3YpGpYqcXegJRW2lP6BShafNh5TsPS8m2+xpdaXKz5e490D1BbiKXoqzPugGpE2zSrySs5RVL/8Yw5H2VKtUUWltt1ddqWxzKmvaz8UinyCfimObpKmc1Dpf1EWmrV6c7+LSNhbOK75KZUp7+JoWV0H+m3VxXf2oV8Nj39NmVFpdqfbiEJFWvRRpPwlu1NtaS6UypR3lr8myg9o7Jou0XGV4ytqcvxf5Oov/uSo8rfhSR2kVnlYvIxsmEj/qO/PfM6TNd9Cwemycqz1Q/xhO/n3brUVVKr3gYqWy6ReXM1N/ulIZFyrlhX2zLVme839211G63KqnsvVxmaaja/Sb7NPgkBlYn8X6pUnfR9353iXLFHGimL78W3YVmwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMf5D+CTNGY7cUYoAAAAAElFTkSuQmCC"
                        alt="Nextjs"
                      />

                      <h1 className="text-[#FFFFFF] bg-[#000000] rounded-md px-3 py-1 mt-2">
                        Nextjs
                      </h1>
                    </div>

                    <div
                      id="git"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="git"
                      />

                      <h1 className="text-[#FF6C37] bg-[#FFFFFF] rounded-md px-3 py-1 mt-2">
                        Git
                      </h1>
                    </div>

                    <div
                      id="github"
                      className="h-full flex-col w-[20vw]  lg:w-[20vw] flex justify-center items-center rounded-2xl"
                    >
                      <img
                        className="frontend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="github"
                      />

                      <h1 className="text-[#FFFFFF] bg-[#000000] rounded-md px-3 py-1 mt-2">
                        Git Hub
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-linear-to-br to-[#ffffff35] border-2  border-[#ffffff30]  w-[90%] py-5 mt-10 rounded-2xl backdrop-blur-2xl">
                <h1 className="text-white text-3xl sm:text-4xl text-center">
                  Backend
                </h1>
                <div className="w-full py-1   flex justify-center items-center ">
                  <div className="px-1 py-2   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-0">
                    <div
                      id="nodejs"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="backend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="Nodejs"
                      />
                      <h1 className="text-[#489837] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Nodejs
                      </h1>
                    </div>

                    <div
                      id="mongodb"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="backend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] rounded-2xl xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/png;base64,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A5k8RGMaFJXHojCwVASojKktaGydEcbR5x35DToDnFNfzIC8Ck3hJu32tDQaKpaeXhruAFxKVHM9awgW16Fva15fX0/xlNMZqAfL88OLpsqUk8rRNc7mm76PwerHeffsM3zosG5GJ3lWzQb9BFbtBcJ6cffFaexgb2Zp1dXFt1SfcKNkBWsUfrfalRg+SgAYh9vYexSWKPfKV7Co8JMToqFR5UfWmnqDOVQVAb+1llefDslwhVftfoThxSL40qxSIiPeUfT+5q/qIcjXcW/l2dNmaTAYlJqlfDCaNknTS99v6mTtO6DRRQS90lB3q/x5r02LJZOm9OUT2m73LmTvLBS6ywaSh1GwKrQA2O5eQehn3I8lfUKpZvN8cUX36FX13MWUMuQp2uN+s9ua6TPjUvTH8/Mh8B5ySGJXciw8rR3XjnN/+7sMrNJ3n6wOH170zAB61qWXiSWTCqsOKLYDxLYDGYwW4Nrqjy5G54O2NlJ1gIP56omF0AfEnlhAudhfI/+wnhkPEVzIc+fQyd4FsI/e1nK13D/+ic7qpX+jd+ftlDtr42IYcbfR4cTvf+6xVvffKun7OO6zN7ncvz6V03dfVm/2v/AVTrG+jFtpXWuPe8VfUglZ2Xbw/M2jf//6sPwkf9P/2zEGElfqDoItw8fr5VLVN1Lid+Ky7mn6l19/+S1/M/VZysFlhqvIl+BoOU+4iPKFtcc7vNWfpp+bmRv3FxTAR3G3JyP+0jd+GmCPd3hTzufPA9j/UUKuQEXegePhrdaSjL6+gT+Pa593w+FT/8ONd0E50aZHNPqLYqdTGU2kY/+2PXBPVt3+4ms81w4XOszGaeHoW1vVnqzO+8Wk90D2EpyV1CRvPKoewJNL+7AKRv3O17nIMkB35sUO7HWb+Itrr9+yWHzFoNArOIfyasZ+v73zlcwKY1+lr3S639d+rA6hR3x9md904suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4suw4uvopn9t6P9I0q6MmHL/Ayz9CtUDxFk1AAAAAElFTkSuQmCC"
                        alt="MongoDB"
                      />
                      <h1 className="text-white rounded-md bg-[#000000] px-3 py-1 mt-2">
                        MongoDB
                      </h1>
                    </div>

                    <div
                      id="mongoose"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="backend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="Mongoose"
                      />
                      <h1 className="text-[#880000] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Mongoose
                      </h1>
                    </div>

                    <div
                      id="express"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="backend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl scale-y-150"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACUCAMAAAD70yGHAAAAzFBMVEX////z3x0DAwTx8fHa2tr79Mby3QDi4uLT09P9+uQAAAT6+vr24R04Nzf96x7TyBxMRxC1tLSlpKU+OzwkICLKycmPjo4VExNJRkioohVEQkP35h7u7u69vLw0MjOXlpZTUVJjYmJsamtbWVp9fH1NTEzq2x3+/fb/8B/HvBqnpqbMy8wsKSodGhvczhycnJxiXxO1qxeMhhRTTg0vKwxpZhFBPhCZkBUPDwd2bhGHh4d2dXWCfBLBtBmhmRYqJww4NgsbGQgfIAiQjRQFFjwKAAAIj0lEQVR4nO2daXeqSBBAFZzBASTBBYmI4DrjEo1mMSHrzPv//2mavaHbRAk1k+TU/WC0aTHeFNVdpe+8Sk1ESqZTkSpIydRRavmgVABQKgAoFQCUCgBKBQClAoBSAUCpAKBUAFAqACgVAJQKAEoFAKUCgFIBQKkAoFQAUCoAKBUAlAoASgUApQKAUgFAqQCgVABQKgAoFQCUCsBPl/rnbxB88KI/Xeofv0PwwYv+fKnV8kGpKLV0UCoAKBUAlAoASgUApQKAUgFAqQCgVABQKgAoFQCUCgBKBQClAoBSAUCpAKBUAFAqACgVAJQKAEoFAKUCgFIBQKkAoFQAUCoAKBUAlArAV5S6aHJZlvi2YfmCUpWurfOolfm+QfmKUhtlvsH/A5QKAEoFAKUCgFIBOFKqGpEf1f4iWPlxlHqMU2t7ETKjlVrz3bUsyDe3L2stoxWlHiNVuxNCzhJ5qrWXBUEOEIS7ufYFpCp95eAR6r4ocueIIvfZB4bf40ip53JOqrq+F6IxH1l4sMClLnVm6obcLMI3bQ8b0/G0NbKp45voSM91IzM1r0ce9NxmVqzkD4/Nhrvp08N9x+yRk/ZM56S6uqBU9YxWGnCeWoWK1EY9NzDskJuW76szMMJzSt4gLb0E/8jKSUT1x6PwFKI+cKjzPI6XSjxupMPGtBMN263JO79xnmJS1ZmcdyoIV0kGgJIqtrNX4iYQYCr+208jT2wlwdqtVJxh+pxamyp1F73kbo+Obm8Y3xs2qeHmCUmpmFTtmnUqCBdxbgDLqfaYflQLtRCpm8fMNDPuvXQr+jAdllaZv4kdW/UWmWePoiyjZ4PTOD5WC0lV52kujW/I7U2cAOAWKo8KHiWKW1Opublpl5G9y0qLmt/NLVCL8EpXVrnXb4c/B7kFqs1f3zgUk/oUB+rT2po9n4dOX8Avf0IjvYDN6K4ZZlWazij8uWpSWXhi52ZVekGyrXu54TDvitPc8IZZJw9RSKp2Ez188fenqvZElF7P4BcqgngZ3zPioHU7DjOtFa5N3VE61M9LIr9HcEUzT28G6UB6zA0v8/IPUkiqFS5Tsmwlh7f09v+TUoVei6UdLeFLN/qZpNdx/jol6OFmSqCCy+iwLxVc6PV8srSDP5fSyw1LRyfVQlJnUUJ9jS54dT377yqqMEKVdCPgDtlJUVgK1OsMOOea+KKVS84RwurkTX9MQanZSM0DW1EFubSX5tbpgjMpjF4h9SKNObPs4Mr3+CGo855xFMUu/3jnv9W402GlKiTmJpRIM18S+AwD6XI6wEm8xHSYc0cu9/fxWgU/wSm2UF3Hu6gLTeVMB67966MOtQBFa3gOL8ig3XSgyaz9BNEMfy7HK4fzp6kN2wbvL/YRxbZU+2Sbej7naIVuqDgC/cjk7R+dwCEl1RkZLF6yGIn6Y3vcZH4txZ603c2pAVtM6iyp/MmWf2vlUyu01N6YXslN3oLiBOs+JdXYLDssmTiU9MfViA3ovj0ZDPVTVq2CZepTWpzKgryfZbUCSx11Kivqku/xItXIX/4O7/JnqXlt3kTJafOWwwMU7FJZr5m+n/yU0Qor1a8uJaq07PFOFlZFlFT9WCnKkL8ZmLDFwyGKtv6ybSqi9YXKraBSa8Gbs9OlyuTs6iutIHwpqUwxephRkzvswG7+A6tvQlbrW1oAQEpVor1nuqmachxE5RAllSnlfXSSeets69uvBiSDmb06tqNSVGpVtX4J2WiV1+CtP8JAyt9xXXZWuKunpTJNJ59RjVOlkk2uxG0VeMd+m6uwVJJXZ7dC5iMVOY5VQKleEldiXC65E3ajOg5fgJbKq/39rZnEVrkTfw/VZoaPXOs+JbWqarOdTGmVzzVoqfSuP26tTCUmXUrRIVqqZDJns4NLfMWM+5EaN7oo/otI9bVa1Yu/Ka3PKqzUfqYr4oRpzwwji8aMzk9L9XdiOcKmDNtnDV5lwdS1jWP3qp+TGoTr812sVb7WYKU2stHjBjpMRWlllxAj9pGRKl7mFpphaLMv5GR5Yd/wMheqOvjqn9F6kXyiMgOVypQ7QQ1AKippQJ/QSNrLGamVmpB52eRzPT27hjXd6LfsZqzabJo4RAlSyeHn+PoPjwNJXTChEtQAfpkqNoxYjNRLr9tubrqczKrol2k26FDNbGmcpO2asEmm90fT4wvVd6UmBjn7VIvWq93JdFL9pFS5zWXA6W/qj3Htr7dcR7d1ozWizs20n5ursT9rM2xsaEeKE4zbTW/l0u2AZmNqkOGF1zCPXfl93pOqzePaU3vLfe6vnf2zpwrT5JPAbQlSTyVuqIhLXdc/7NT1O2RWh92E9f1n20w/SqzbZLh+2ocAh6Wqs6t4NY8/lBKinOnvUGU6FWi3X0Dq1+GQVNXa+98+CzOAehbXolZ8yH9wFsdq2gosI6eeyreRas1vAnFvVUtVLStKmfKbFhqOvkOxtyz/S6va+rXM1f9UvotUdRdvkuTd8/bXfby93weBGD8k1dTDdv58cVXuPvVUet9F6jopPZMbn6Blos7Tvr+c3pZWUZ2K902kVq2dwCLfhoGo7TkHhdJq/+/PoYVKu2adJV0obZfppTLHUSpfatW6zomT5XQPpW0530+9n5XTT/3+HN6nanu6CS0Lr+tML/Uq06Im92+rJXX+vz/vVFTW7EEOfPm3rxeZupTUVOuH+/BoMOlhTX1ZBaUelEp2+dbzr6fbq4fdyxn7lQnV0s5edg9X5PB+bmWUo9TDUqvBP0qzgh3+waMa5zBKfVdqMVAqSi0dlAoASgUA/zs6APA/TvwpoFQAUCoAKBUAlAoASgUApQKAUgFAqQCgVABQKgAoFQCUCgBKBQClAoBSAUCpAKBUAFAqACgVAJQKAEoFAKUCgFIBQKkAoFQAUCoAKBUAlAoASgWgXunUkJLR/wWDSck2Z70xJgAAAABJRU5ErkJggg=="
                        alt="Expressjs"
                      />
                      <h1 className="bg-[#F3DF1D] rounded-md text-[#000] px-3 py-1 mt-5">
                        Expressjs
                      </h1>
                    </div>

                    <div
                      id="cloudinary"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="backend w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="Cloudinary"
                      />
                      <h1 className="text-white rounded-md bg-[#3448C5] px-3 py-1 mt-2">
                        Cloudinary
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block Chain */}
              <div className=" backdrop-blur-2xl w-full bg-linear-to-tl to-[#ffffff18] border-[1.5px]  border-[#ffffff40]   py-5 mt-7 rounded-2xl">
                <h1 className="text-white text-3xl sm:text-4xl text-center">
                  Block-Chain
                </h1>
                <div className="w-full py-1  mt-3  flex justify-center items-center ">
                  <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 lg:gap-2">
                    <div
                      id="html"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${soldity}`}
                        alt="soldity"
                      />
                      <h1 className="bg-white blockchain rounded-md text-[#000] px-3 py-1 mt-2">
                        Solidity
                      </h1>
                    </div>

                    <div
                      id="html"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${hardhat}`}
                        alt="hardhat"
                      />
                      <h1 className="bg-white blockchain rounded-md text-[#000] px-3 py-1 mt-2">
                        Hardhat
                      </h1>
                    </div>

                    <div
                      id="html"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${etherjs}`}
                        alt="etherjs"
                      />
                      <h1 className="bg-white blockchain rounded-md text-[#2739a0] px-3 py-1 mt-2">
                        EtherJS
                      </h1>
                    </div>

                    <div
                      id="html"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${alchemy}`}
                        alt=""
                      /> 
                      <h1 className="text-white blockchain rounded-md  bg-linear-to-tl  to-[#0055FE] from-[#1ABBF2] px-3 py-1 mt-2">
                        Alchemy
                      </h1>
                    </div>

                    <div
                      id="metamask"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${metamask}`}
                        alt="metamask"
                      />

                      <h1 className="bg-white blockchain rounded-md text-[#FF5722] px-3 py-1 mt-2">
                        Metamask
                      </h1>
                    </div>

                    <div
                      id="metamask"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${chai}`}
                        alt="chai"
                      />

                      <h1 className="bg-white blockchain rounded-md text-[#9C0000] px-3 py-1 mt-2">
                        Chai
                      </h1>
                    </div>

                    <div
                      id="mocha"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="blockchain w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-lg"
                        src={`${mocha}`}
                        alt="mocha"
                      />

                      <h1 className="bg-white blockchain rounded-md text-[#8D6748] px-3 py-1 mt-2">
                        Mocha
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* OS */}
              <div className="bg-linear-to-tr to-[#ffffff35] border-2 backdrop-blur-2xl  border-[#ffffff30]   w-[90%] py-5 mt-10 rounded-2xl">
                <h1 className="text-white text-3xl sm:text-4xl text-center">
                  Operating Systems
                </h1>
                <div className="w-full py-1   flex justify-center items-center ">
                  <div className="px-1 py-2   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
                    <div
                      id="Windows"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className=" os w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAllBMVEX///8BeNYAd9cDd9T///zd+PoAdNT7//7r/Pv7/f9wrdIAa7tlocalzOXU9P4Ab8AAb9D9//gAZsFTmdU4iM0AcL/1//8AdNIAa78Adtv//fgAaMD7//uLts0yg8c2frQ5iMh1rcZ1qsoAc9kAb7mSvtdSk8lMk8RXlcBLl9fG3umbyeWnyNgAassAYLEAV6BXl7vh8/mmqUN8AAADAElEQVR4nO3cD1MSQRiA8b3b5d5DM4HygOVMgspSyfz+X67d44zRMcd4b1r+PM+YAw6+HT8WUBzWGCIiIiIiIiIiIiIiov+Wc80nTUakriunnBIPxEsSgqqScB02hfNPzq1rTq0/Ve0l2q83p2rvxLcXeNrjRdeD2y9Uz/+TzYkUBnL56aO6q544Ka+0Y+bz+ecUBmaxzPMi374it9PTXljHvfOpYkzM5oN3SQxOlrlVlgcDceVFphxjs3Eig8Lmma7GwJTn2jnWFhhggAEGGPxBwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAg7ePwSBjHWCw7wYWAwxiGGCAAQYYYIABBhhg8NKRY4BBDAMMMMAAAwwwwODwDAa7YpDyb23jHTFIuQ5eM7DHYcDjAQadGlxgcNTrwNqODPJsmu7nA9179rN8Evc/KL8o3/sfSmVQNFcj3grr2+L5bbM58cJHLMseDV68bf/+zZuPdk6q+8JiMJ2OC13xviC9yVI5prCJ9sH4+u2DuuvS9031/Vo96MdlCoLwYGacdogMvdSui01thvoR2ySi2thIJG5sFId435zZcmskEenXkmZ/pNrpN3cSF6++VJoZdR0Wk1Mvya0Mwk2nn9I3JqwC7aGYDu6W2+Rvbs/U3ZXem+pOPen27CaFgTlZDdT9bPZHOtUPWv1KY1C86TWCV3/GnTQGx/z7Qtbuk7XPBt28lrbfBqwDDHgNpTHYmb8vsA4wwAADDDDAAAMMMMAAAwwwwACDXTbQHjkGGGCAwSEZ8LyAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEG/2igPfQDMNAeOQYYYHA4Bjwm8tyIAQYYdG3QwXs8831/XnD6vcIwwCC1gfrYJ3u+b95iNBvpmq3ue0aG5b12zmg2S7MXyMP7DhInvupi0EMSA3FD5YY84fvDBG+ccpMrHzdq0o3YLumHf/VQUx3nOCMBQVfcdCuJgQT9vq6401YkMLoxYRXUKQiIiIiIiIiIiIiI6Cj7Dc4v1CqgudasAAAAAElFTkSuQmCC"
                        alt="Windows"
                      />
                      <h1 className="text-[#0178D6] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Windows
                      </h1>
                    </div>

                    <div
                      id="macOS"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className=" os w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] rounded-2xl xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/png;base64,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"
                        alt="macOS"
                      />
                      <h1 className="bg-white rounded-md text-[#000000] px-3 py-1 mt-2">
                        Mac OS
                      </h1>
                    </div>

                    <div
                      id="linux"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="os w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="Linux"
                      />
                      <h1 className="text-[#000] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Linux
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Software */}
              <div className="bg-linear-to-bl to-[#ffffff35] border-2  border-[#ffffff30]  w-[90%] py-5 mt-10 rounded-2xl backdrop-blur-2xl">
                <h1 className="text-white text-3xl sm:text-4xl text-center">
                  Development Software
                </h1>
                <div className="w-full py-1   flex justify-center items-center ">
                  <div className="px-1 py-2   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
                    <div
                      id="cursorAI"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="dev w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="cursorAI"
                      />
                      <h1 className="bg-[#000] rounded-md text-[#FFFFFF] px-3 py-1 mt-2">
                        Cursor AI
                      </h1>
                    </div>

                    <div
                      id="vscode"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="dev w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] rounded-2xl xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhMSBxAQFhUVFhgVGRgXFxkYFRkTFxYdGhUTFRUaHSggIR0mHRYTIzEhJTU3LzouGSAzODMsOCgtLjcBCgoKDg0OGxAQGi0mICUvLS0wNTUtLTUuLy0tLS4tLTA2Ly0tLS0wLy0tLS0tLTctLS0tMC0tLS0tLS4tLS0vK//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EAD0QAAIBAgMFAwgHCAMAAAAAAAABAgMRBAUGITFBUWESInEyNVJzgZGy8AcTYqGxwcIUJCU0NkJy0SaCov/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQECAwb/xAAwEQEAAgEDAgUCBQQDAQAAAAAAAQIDBBEhBTESIjNRcbHBQWGR0eETMqHwIzRDQv/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHJjczo4FpYqpCLe5N7X7N50pivf+2HLJmpj/ul6YXGU8ZG+GnGXg/xRi+O1J2tGzamSl43rO73NG4AAAAAAAAAAAAAAAAAAAAAAAAAAAABWtV6qjk8HTwtpVmt2+MOsuvQlYNPOTmeyJqNTGPiO7MMRXliq8p4huUpO7b3tlpEREbQqZmZneU1lteUKUJwk1JcU9vvO20WrtLhvNbb14WjLdWTpNLHx7S9JbJe1bmQcugrPNOFhh6jaOMkbrRgcxpY+F8LNPpukvFPaV2TDfHO1oWeLNTJG9ZdRydQAAAAAAAAAAAAAAAAAAAAAAAAAVDV+rll6dHLWnV3OW9Q6dZdOH3EzT6bx+a3ZC1Oqinlr3+jNqlR1JuVRttu7b2tt722WcRsqpnfmXzcywmsA/3SPh+bO1ezjbu6LmWr6p1HTnem2muKdn70JrExtLMWmJ3hYMt1XUoWjjV24890kvwZAzaCtuacfRYYeoXrxfmP8rjhcRHF4dToO8ZK6Km9Jpaa27ril4vWLV7PU1bAAAAAAAAAAAAAAAAAAAAAAFF1jrL6m9DKJd7dOoty5xg+fX5U/T6XfzXV2p1e3lp+rPHK72lirS4C4E3gH+5x8PzO1ezhbu6LmzUuAAvGh5uWVyT4TdvcmU3UI/5I+F302d8U/KxEBYgAAAAAAAAAAAAfM5qnBubSS2tvclzZmI37MTO3Mo3CahwuMxP1eGrwctyW1Xf2W1Z+w7X02WkeKa8OFNVivbw1tylDgkAAAB+N9lXkBnWsdZftHaoZPLu7VOor3lwcYPlv28eBZabS7ea6r1Or38tO3uoxPV4AAATmX/ycfD82dq9nC3d0XNmpcBcC7aF82z9Z+lFN1H1I+F30z05+fsspXrIAAAAAAAAAAAHxXrRw9FzrNKMVdt7klxM1rNp2hi1orG8sw1VqmWbzdPC3jRXDc59ZdOhd6XSRijxW7/RQ6rWTlnw1/t+quKVnsJuyEummdaOjalnDbjuVTfJdJriuu/xKzU6HfzY/0Wel18x5cvb3X+nUVWmpUmmntTTumuaaKqYmJ2lcRMTG8Powy+atRUqblVaSSu23ZJc22ZiJniGJmIjeWXax1g80bo5c3GjxltUqn+o9OJa6bS+DzW7/AEVGp1X9Ty17fVULkxCLgLgLgTGntO1s+r2w67MF5VRruroub6L7jjmz1xRz39nfDgvlnjt7pfNMDHK8bKjQbcYWV3vey7b9rZ3015vji0o2ppFMs1hy3O7gXAXAvGhPNk/WfpRS9S9SPhedL9Ofn7LKV6yAAAAAAAAAAABF6lwU8wyOrTw3lNbFzs07e2x3014pli09nDU45yYprXux2cXTm1UTTTs09jT4po9FHPMPMzxxL5uZC5gTendTVckqWV5Um9sH+MXwf3EbUaWuWN+0+6VptXfDO3ePZpWDz7D4vLHXhUShFXlfY4dJLn8q5S3wXpfwTHK8x6jHenjiePozTV+rJ55V7GG7UaCexbnN+lP8kWWn00Y43nuq9TqpyztHZWbkpELgLgO1beNhdNKaInj7Vc3ThT2NQ3Tn4+ivv8CFn1cV8tO6fp9HN/Nfs0vD4eOFoKGHjGMYqySVkl4FXNpmd5W0VisbQzvVT/j1XxXwov8AR+jV5zXevZE3JSIXAXAvOg/Nk/WfpRTdS9SPhedL9Ofn7QsxXLMAAAAAAAAAAAACtas0tHOYfWYa0ayW/hNejLryZN0urnF5Z7fRB1ejjNHirxb6suxFGWGruGIi4yi7NPemXlbRaN47KC1ZrO093ncywXAS70bMxMbkTs5qkHDwOc12da23fFzVuXA9sJhp43EKnhISnOW6K3/PVmLWisbyzWs2nasctQ0nomGVtVcytOrvS3wh4c5dfcVWo1c38teIW+n0cU81+Z+i4EJOAM01U/49V8V8KPQ6L0KvN6717Im5KRC4C4F60D5sqes/Sil6l6kfC86X6U/P2hZyuWYAAAAAAAAAAAAACB1RpqGeULxtGql3Z23/AGZ81+BK02qthn8kTVaSuaPafdlOPwdTLsVKnjIuMo+7o0+K6l9jyVvXxVnh57JjtjtNbRy57m7QuAuB41KXoe452p7Olb+6Q0/p+tn2J7OFjaK8qb8mP+30X3EbNmrijlLw4L5Z2r+rW9Paeo5DhuzhY3k13qjXfl7eC6FPmz2yzyucOCmKNo7+6XOLuAAMz1X5/q+K+FHotF6FXmtd69kTclIhcBcC96B811PWP4UUnU/Uj4XvS/Sn5+0LOVyzAAAAAAAAAAAAAAROo8/pZBgu3ineTuoQXlSl06brs7YcNsttocc+euKu8sczjPKucZg6uMe/YoryYx4Rj/su8OOMVdqqDPktmt4rPGM+0thKjlFmJh+3MsFwFwJ/TGqamRz7Mu/Sb2w4rnKD59NxE1Okrm57SmaXWXw8d49mp5XmdLNcIqmCmpRfvT5SXBlFlxWx28NoegxZqZa+Kkuw5ugAAzLVj/5BV8V8KPR6L0KvM6/17Ii5KRC4C4F8+j/zXU9Y/hRSdT9SPj7r3pXpT8/aFoK1aAAAAAAAAAAAAAQOq9UUtPYbv96rJdynz+1J8I/KJGDT2yz+SNqNTXDH5+zGszzKpmuMlVx0nKT9yXCMVwS5F1THWlfDVR3yWvbxWnly3N2j9hPsPYZidmJiJdMJqa2HWJ3cJjZ9GzG4DcA7MqzSrlOL+swMuy9z4xkuUlxRyy4q5a+G0OuLNfFbxUlqmmdVUs8gou0KqW2D483B8V03lFqdJfDz3j3eg0utpm47W9lhIiYAZjq3+oKvivhR6PRehV5nX/8AYshyUhgAC/fR95rqesfwxKTqfqR8fdfdK9Kfn7QtBWrQAAAAAAAAAAAEXqbM3k+R1a1NJyitie7tN2V+m064cf8AUvFXLPk/p45tDCsbjKmOxMqmMnKc5b23t8Oi6F/WsVjaHnbWm0727vC5lqXAldP5DXz/ABXYwUdi8qb8iPi+fTecs2auKN7O2HBfLO1Wq5dojC4PKpUakFOU1aVRrv35w9FJ7Ul7blVbWZJv4onb8lvXRYop4Jjff8f97M81Np2pkGKtUvKnLyJ22P7MuUuhc6bU1zV47+yj1Wltgtz2/CULckopcBcD6p1HTmpU201tTTs0+aaMTG8bSzEzE7w0LSuu1O1LPGk9iVXg/Wcv8t3OxU6rp+3mxfp+y50vUony5f1/dfotSjeO1MqVwzDV39QVfFfCj0eh9CrzGv8A+xZDktDAAF/+j3zVU9Y/hiUfVPUj4+6/6T6U/P2haStWgAAAAAAAAAAAOfMMFDMcFOlileE04tdOj5m1LzS0WhrekXrNZ7SxPVmmKunMV37ypSfcqW/8y5SLzT6iuWPzUGo01sM/l7oC5IRlx0hoernPZq5henQ3rhOf+K4L7T9nMh6jV1x+WvMp2m0dsnmtxH+Za1gMDTy7CqngoRhCO5L8W97fVlPe9rzvaeV1SlaR4axw6DVs8MbhKeOw0qeLgpQlsafz95tS9qT4qzy0vSt6+G0bwyTVulqmQ1e1TvKi3slxi3ujPr14noNLq65o2nizzur0VsE7xzVXbkxCLgLgLgWXS2sKuSSUMR2qlH0dnaj1g38L2eBC1Oirm5jiydpddfD5Z5r9Ph76gxkMfm06uFleMrNP/qjtpKWpiitu7jrMlb5ptWeJRxIRQABf/o881VPWfpiUfVPUj4+70HSfSn5+0LUVi0AAAAAAAAAAAAA8cZhYY7DSp4uClCSs09zRtW01neGtqxaNp7K3gNAYLBY1VIxqTs7qM5dqCfDZbbbrck31uW1dkWmhxVt4lq3ERMAAADzr0Y4ii4V4qUZKzT2prkzNbTWd4YtWLRtLKtZaQlk83VwClKg9r4un0fOPJ+/mX2k1sZfLf+76vPa3QzinxU5r9P4VG5YK4uAuAuBLYN/u0fniZYe1xswXGwXGw0H6O/NNT1j+GJRdU9WPj7y9B0n0rfP2haisWoAAAAAAAAAAAAAAAAAAAAD8nFTi1NJp7Gnua5NCJ2JjdmGtdFvA3r5RFunvlTSu4fajzj04eG680eu8fkyd/f3UOt6fNPPjjj29v4Ua5ZqkuAuBLYJ/usfniZhh73MhcBcDQvo7VsonfjUfwooeqerHw9B0mP8Ain5+0LUVi1AAAAAAAAAAAAAAAAAAAAAAAGda30RsliMlj1nSX3ypr8Y+7kXGi1//AMZJ+J/dS67p/wD6Yo+Y/ZnJcKQuBLYL+Vj88TLD3A/G7bwxunso0riMys5R+rg/7p7Hb7Md7IWfXYsXHefyT8HT82XnbaPz/Zo2V4CGWYGNLD7orfxb4yfiUGbLbLeb2ejwYa4aRSv4Os5OoAAAAAAAAAAAAAAAAAAAAAAAAUbW2ilj1KvlEUqu1ygtin1XKX4lpotd4PJk7e/t/Cq13T/6nnx9/r/LLJxdObU001saexpremi8iYnmHn5iY4lL4JP9nikttvzMsfis+UaQxGPtKuvqoc5eU10jv99iDn6hix8V5n/fxWGn6blyc28sf5/T911yfTWHypJ049qa/vnZy9nBewp8+ty5uJnaPaF1p9Diw8xG8+8pkiJgAAAAAAAAAAAAAAAAAAAAAAAAAAACDzfSeEzav9ZiaSU3vlHY3/lwftJWHWZcUbVnhEz6LDmne0cujK9P4fK3fDU12vSl3pexvd7DGbV5cvFp4Zw6PDh5rXn3/FKEZKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                        alt="vscode"
                      />
                      <h1 className="text-[#2D7FB9] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Visual Studio Code
                      </h1>
                    </div>

                    <div
                      id="mongoDBCompass"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="dev w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="compass"
                      />
                      <h1 className="text-[#489837] rounded-md bg-[#000] px-3 py-1 mt-2">
                        MongoDB Compass
                      </h1>
                    </div>

                    <div
                      id="postman"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="dev w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl "
                        src="data:image/png;base64,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"
                        alt="Expressjs"
                      />
                      <h1 className="bg-[#FFFFFF] rounded-md text-[#FF6C37] px-3 py-1 mt-5">
                        Postman
                      </h1>
                    </div>

                    <div
                      id="remix"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="dev w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src={`${remix}`}
                        alt="remix"
                      />
                      <h1 className="text-[#000] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2 text-center">
                        Remix IDE
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* CyberSecurity Tools */}
              <div className="bg-linear-to-tl to-[#ffffff35] border-2  border-[#ffffff30]   w-[90%] py-5 mt-10  rounded-2xl backdrop-blur-2xl">
                <h1 className="cyberSecurity text-black text-3xl sm:text-4xl text-center">
                  CyberSecurity Tools
                </h1>
                <div className="w-full py-1   flex justify-center items-center ">
                  <div className="px-1 py-2   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
                    <div
                      id="nmap"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="cybertools w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="nmap"
                      />
                      <h1 className="text-[#000] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Nmap
                      </h1>
                    </div>

                    <div
                      id="wireshark"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className=" cybertools w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] rounded-2xl xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/jpeg;base64,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"
                        alt="wireshark"
                      />
                      <h1 className="text-[#0960D4] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Wireshark
                      </h1>
                    </div>

                    <div
                      id="burpsuite"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="cybertools w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/jpeg;base64,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"
                        alt="Burpsuite"
                      />
                      <h1 className="text-[#FF6C37] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Burpsuite
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hosting Platforms */}
              <div className="bg-linear-to-b to-[#ffffff30] border-2  border-[#ffffff30]  w-[90%] py-5 mt-10 rounded-2xl backdrop-blur-2xl">
                <h1 className="text-white text-3xl sm:text-4xl text-center backdrop-blur-2xl">
                  Hosting Platforms
                </h1>
                <div className="w-full py-1   flex justify-center items-center ">
                  <div className="px-1 py-2   grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
                    <div
                      id="vercel"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="hosting w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[6vw] h-auto rounded-2xl"
                        src="data:image/png;base64,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"
                        alt="vercel"
                      />
                      <h1 className="text-[#000] rounded-md bg-[#FFFFFF] px-3 py-1 mt-2">
                        Vercel
                      </h1>
                    </div>

                    <div
                      id="Renderer"
                      className=" h-full w-[20vw]  lg:w-[20vw] flex flex-col justify-center items-center rounded-2xl"
                    >
                      <img
                        className="hosting w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[10vw] rounded-2xl xl:w-[7vw] 2xl:w-[6vw] h-auto"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8NDQ0AAACmpqbk5OT39/c5OTn8/PwbGxsHBwcPDw/19fUFBQUtLS1ubm7q6uq/v7/t7e2Li4vf39+Xl5dFRUU/Pz/Nzc01NTUjIyPJycmBgYEvLy9NTU2wsLBkZGShoaFqampYWFiZmZkmJia2trbX19d5eXmDg4MbGwgvAAAEkklEQVR4nO2ci1biMBCG26ElJC2UOwoCigi+/xPupEW8IaTprkm6/3eUwxEPzOckmWmbGkUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw9xH8JaLTQyupzFqr978gsiIpRm1LoxDl8MwWm8F6dre/v+/P19vnZVK95Dq6v4G2yIartSJNLmVePukOOomelS1wFKLo7HpEMn5D8bfkH9xND60wTDuzdz357qhioofxxHV4DeEEHdZE8U+wYyd1HaQtZW2PsqkiqX401I7bSbUYhTdcdczFgMenqkblZZSk2TIKshHQISe7D+vLRfTLtN+EKKhjTro/z8AqgVVyiTYhJpGH6C3BMzm9BNiPi2xrKshZ7C8DTOLKXJDr/yxxHW9thlwlbiwz7/CKOggpiXpKpVfq/AVDHqhBrTZcCsd1BLUjdYtwFFlwcqsQfsthTNNgBLXioGYKGfkQUhee1MpgXNV+enYddg3qzsJSkmaF67iNEfO8viE7Dl0HbszCIoUMHV0HbsyjpeF65DpyU/Z2hlIeXEduiqy7lJaoON+4jtyQiV0Kuf8OZSJuLA1j2gXSuHXI/KjiI1wRAzghpc+aWbRspxzOAzi1qA1tBQMx5KbU3rAbgqGIpu3OIWM9DeNAVpqi3sHvJ8N1ANVCRM+2KeQjxG0IhtnM2lDS1HX4JgytZyF3bd4fIOp1Yt7AsO/7mRohsmh5/XLhVWjr/SRMRTQjdeVq4VUUPboWuIVIxZCsMxjn974fAHM7k/byaxd8r+Qv1qdpvL/CJoRtO8NHW0qGcKrtxXod5clL28z7cn/oWfdruhj6f5E069uXQk7h0e9dbnpHzM5eUCm68/yUvtCrjH2tj6n34lrhBml6bDBE2XDs+yRMnxqUehYcZK4NfkCcNogmepGpr6hOD/SUusigELcXN5GWh6zLWtsS3tHFRUlJT3rj3u87pgYfWv4RsqNsMgeJVqnJX/MfYPCh+lcWM8qt56DiVbSTufGLXgzaRBEVRyJlK6jinLoHPdZ/XZE/b7Sn+bB6elpQxJuVKAPSLyRjqxlYboLWrSj1Hn9X7JPhg95Qv9Hbzb7MyLf9vNliq6wmoCqXGMlv/+zsom9lqIPYPw11FB8Mq6ejZLwuN6jbjFCp3/l+x+/srBXVK+RDXvaLzGA8/BxJMl11iei8BfaKC11EysFwEjm+paTY5/H51ghmP3jsaMbzKsgPY+6a3mvnO5tF+Qmub/RKvhzs5ecEGAxDpRcSonHic7P51bAuuVyNIietiilNDDmFOS3Kaeak4TSjgWFZ6ZKqaHp8UNTAUPKkDWDbdpMcSlq4Dt+AJvOQVh4PzjNNRikVLTek1xAEGxlOWm/odZE4Y29YnXZxHf9tGhh2wrgNvZFhEMAQhv4DQxj6Dwxh6D8whKH/wBCG/gNDGPoPDGHoPzCEof/AEIb+A0MY+g8MYeg/MISh/8AQhv7TdkPRdkN9S1Mvt/wHF6EYTnqXb3cxIBDDYt21pB/K/3fMUlsC2JcIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADThD0M3QQoPlWI+AAAAAElFTkSuQmCC"
                        alt="render"
                      />
                      <h1 className="bg-white rounded-md text-[#000000] px-3 py-1 mt-2">
                        Render
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* horizontal projects */}
      </div>

      <div
        id="scrollContainer"
        className="w-full flex h-screen overflow-hidden bg-[#11081F]  relative        "
      >
        {/* scroll container me overflow hidden he */}
        <div
          id="section"
          className="w-[100vw] h-screen flex justify-center   items-center  text-white flex-col "
        >
          <h1 className="projects mb-[7vh] text-4xl z-10 ">Projects</h1>

          <h1 className="text-2xl          text-white text-center z-10">
            Full Stack Chatting Website
          </h1>
          <div className="w-[90%]  py-2 grid grid-cols-1 relative backdrop-blur-3xl">
            {/* gradient */}
            <img
              className="absolute top-0 left-0 scale-[2.5]"
              src={`${gradient}`}
              alt=""
            />
            {/* macbook code */}
            <div className="w-full rounded-lg pt-2 pl-2 border-l-2 border-l-[#ffffff79] border-t-2 border-t-[#ffffff79] bg-linear-to-tl to-[#7127BA] to-60% from-[#fff]  overflow-hidden backdrop-blur-lg">
              <img
                className="backdrop-blur-2xl scale-[3] translate-x-[320px] translate-y-[210px]"
                src={`${project1}`}
                alt=""
              />
            </div>
          </div>

          {/* project details */}
          {openFirstProject ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[85vw] bg-[#202429] px-4 py-1  md:w-[65vw] backdrop-blur-3xl text-[#ffffffcd] rounded-lg relative"
            >
              {/* close btn */}
              <button
                onClick={() => setOpenFirstProject(false)}
                className="absolute top-2 right-2  cursor-pointer hover:text-gray-300 transition-colors text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </button>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-xl font-semibold mb-"
              >
                Specialities
              </motion.h2>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="list-disc pl-6 mb-2"
              >
                <li>Global Chat</li>
                <li>Realtime Chat</li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <h3 className="font-semibold mb-2">Tech Used</h3>
                <p className="mb-2">
                  Frontend: Html, Css, Tailwindcss, GSAP, scrollTrigger,
                  Reactjs, Zustand, Socket.io-client, React Router Dom, Axios,
                  javascript.
                </p>
                <p>
                  Backend: Nodejs, Expressjs, MongoDB, Mongoose, Socket.io,
                  RESTful API, Jsonwebtoken.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <button
              onClick={() => {
                return setOpenFirstProject(!openFirstProject);
              }}
              className="mt-4 px-10 py-2 bg-[#7127BA] border-2  border-[#ffffff82] text-white rounded-lg  cursor-pointer transition-all duration-300 font-medium backdrop-blur-2xl"
            >
              {" "}
              details
            </button>
          )}
        </div>

        <div
          id="section"
          className="w-[100vw] h-screen flex justify-center   items-center  text-white flex-col  absolute top-0 left-[100vw]"
        >
          <h1 className="text-2xl         backdrop-blur-4xl">
            Full Stack Social Media Website
          </h1>
          <div
            className={`py-2 grid grid-cols-1 relative
              ${openSecondProject ? "w-[70%]" : "w-[90%]"}`}
          >
            {/* macbook code */}
            <div className="w-full rounded-lg pt-2 pl-2 border-l-2 border-l-[#ffffff79] border-t-2 border-t-[#ffffff79] bg-linear-to-tl to-[#7127BA] to-60% from-[#fff]  overflow-hidden backdrop-blur-lg">
              <img
                className={`scale-[3]  ${
                  openSecondProject
                    ? "translate-x-[250px] translate-y-[170px]"
                    : "translate-x-[320px] translate-y-[210px]"
                } `}
                src={`${project2}`}
                alt=""
              />
            </div>
          </div>

          {/* project details */}
          {openSecondProject ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[85vw] mb-1 bg-[#464547] px-4 py-1  md:w-[65vw] backdrop-blur-3xl text-[#ffffffcd] text-[14px] rounded-lg relative"
            >
              {/* close btn */}
              <button
                onClick={() => {
                  return setOpenSecondProject(!openSecondProject);
                }}
                className="absolute top-2 right-6  cursor-pointer bg-transparent rounded p-2 hover:text-gray-300 transition-colors text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-xl font-semibold "
                >
                  Features
                </motion.h2>

                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="list-decimal pl-6 space-y-2"
                >
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    JWT authentication and authorization
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Profile management
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Post creation and interaction (like, comment, share)
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Real-time interactions
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    Explore and search functionality
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    1-on-1 Chat
                  </motion.li>
                </motion.ul>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="text-xl font-semibold mt-2 mb-2"
                >
                  Tech Used
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="space-y-2"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    Frontend: Html, Css, Tailwindcss, GSAP, Framer Motion,
                    scrollTrigger, Reactjs, Zustand, Socket.io-client, React
                    Router Dom, Axios, javascript.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    Backend: Nodejs, Expressjs, MongoDB, Mongoose, Socket.io,
                    RESTful API, Jsonwebtoken, Multer.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <button
              onClick={() => {
                return setOpenSecondProject(!openSecondProject);
              }}
              className="mt-4 px-10 py-2 bg-[#7127BA] border-2  border-[#ffffff82] text-white rounded-lg  cursor-pointer transition-all duration-300 font-medium backdrop-blur-2xl"
            >
              {" "}
              details
            </button>
          )}
        </div>

        <div
          id="section"
          className="w-[100vw] h-screen flex justify-center   items-center  text-white flex-col  absolute top-0 left-[200vw]"
        >
          <div className="w-[85vw] md:w-[65vw] relative">
            <img
              className="absolute top-0 left-0 -z-10 scale-[1.5] "
              src={`${gradient}`}
              alt=""
            />

            <h1 className="projectPage3Text text-[60px] leading-13 z-10 text-gray-400 text-center">
              Helping businesses{" "}
              <span className="font-bold text-[#fff] ">increase revenue </span>{" "}
              through fast, secure{" "}
              <span className="font-bold text-[#fff]">websites</span>.
            </h1>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-linear-to-t from-[#7127BA] rounded-t-[20px] to-[#070E16]  pt-4 w-full ">
        {/* Cards  */}
        <div className="w-full flex justify-center items-center  rounded-2xl flex-col">
          {isMessageLoading ? (
            <Loading />
          ) : (
            <div className="w-[85vw] md:w-[65vw] card py-5 bg-[#ffffff1b] px-4  rounded-2xl">
              <h1 className="  text-center text-3xl sm:text-[45px] md:text-[60px] lg:text-[90px]  text-[#fff] font-normal">
                Connect with ME
              </h1>
              <form action="" onSubmit={handleSubmit} method="post">
                <input
                  className="bg-white mt-4 px-6 py-2 w-full rounded-md text-2xl outline-none"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
                <input
                  className="bg-white px-6 py-2 w-full rounded-md text-2xl outline-none mt-4"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />

                <input
                  className="bg-white px-6 py-2 w-full rounded-md text-shadow-md md:text-2xl outline-none mt-4"
                  type="text"
                  placeholder="Contact Number"
                  name="number"
                  onChange={handleChange}
                />

                <textarea
                  id="helpMessage"
                  name="message"
                  rows="5"
                  onChange={handleChange}
                  className=" outline-none w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mt-4 bg-white"
                  placeholder="How can i help you?"
                ></textarea>
                <button className="w-full bg-[#4ED7F1] rounded-full mt-4 text-white font-bold text-xl cursor-pointer lg:text-4xl py-2 hover:rounded-md transition-all hover:scale-95 hover:duration-300">
                  Send
                </button>
              </form>
            </div>
          )}

          {/* Feedback Card */}
          {isFeedbackLoading ? (
            <Loading />
          ) : (
            <div className="w-[85vw] md:w-[65vw] rounded-2xl mt-2 flex ">
              <input
                className="bg-white  w-full rounded-l-xl outline-none px-2 md:px-6 py-2 text-md md:text-2xl"
                type="text"
                placeholder="Feedback"
                onChange={(e) => setMsg(e.target.value)}
              />
              <button
                onClick={feedbackHandler}
                className="px-5  outline-none duration-200 hover:rounded-2xl rounded-r-xl bg-[#4ED7F1] text-white font-bold text-2xl cursor-pointer"
              >
                Send
              </button>
            </div>
          )}
        </div>

        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}
        <div className="w-full px-[2vw] flex translate-y-[2vh] sm:translate-y-[4.8vh] md:translate-y-[7.8vh] justify-center flex-col  items-center">
          <h1 className="text-[6vh] sm:text-[12vh] md:text-[15vh] lg:text-[20vh] font-bold">
            MAHAJAN
          </h1>
        </div>
        <div className="bg-black py-4 w-full rounded-t-[30px] md:rounded-t-[50px] flex justify-center items-center text-xl text-[#4ED7F1]">
          <h2 className="text-sm  text-center">
            ©2025 Gaurav Mahajan.All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
