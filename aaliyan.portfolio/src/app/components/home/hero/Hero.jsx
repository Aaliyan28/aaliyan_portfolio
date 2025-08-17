import React from "react";
import Wrapper from "../../shared/wrapper/Wrapper";
import Image from "next/image";
import user from "../../../asset/aalipic2.jpg";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const seeWorkHandle = () => {
    router.push("#portfolio");
  };

  const socialIcon = [
    {
      icon: <TiSocialFacebook size={28} />,
      link: "https://www.facebook.com/aaliyyy.28",
    },
    {
      icon: <TiSocialLinkedin size={28} />,
      link: "https://www.linkedin.com/in/aaliyan-mansoor-3b5801300/",
    },
    {
      icon: <FaWhatsapp size={28} />,
      link: "https://wa.me/+923373164391",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div
      id="home"
      className="div-container flex md:flex-row flex-col relative group md:max-w-screen-lg xl:max-w-screen-2xl mx-auto"
    >
      <Wrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex md:flex-col lg:flex-row sm:flex-col flex-col w-full items-center justify-center lg:justify-between h-full pt-32 pb-24 lg:px-0 px-3"
        >
          <motion.div
            variants={textVariants}
            className="max-w-full sm:max-w-full md:max-w-full lg:max-w-[70%] w-full flex flex-col lg:justify-start justify-center lg:text-left text-center md:gap-y-4 ml-[0rem] xl:ml-[-2.5rem]"
          >
            <h2 className="text-lg md:text-2xl font-bold text-secondary-text">
              Hi There,
            </h2>
            <h1 className="sm:text-5xl text-5xl lg:text-6xl xl:text-7xl font-semibold">
              I am <span className="name">Aaliyan Mansoor,</span>
            </h1>
            <h3 className="sm:text-5xl text-5xl lg:text-6xl xl:text-7xl font-semibold">
              Computer Systems Engineer | UI/UX Developer
            </h3>
            <p className="text-lg lg:text-xl lg:text-left text-center lg:mx-0 mx-auto max-w-[500px] text-secondary-text tracking-wide">
              Passionate about technology, startups, and web development. I love
              creating solutions that make an impact.
            </p>
            <motion.div
              variants={buttonVariants}
              className="flex flex-wrap gap-4 xl:gap-x-6 lg:justify-start justify-center items-center mt-6 z-10"
            >
              <button
                onClick={seeWorkHandle}
                className="border text-lg lg:text-xl font-semibold hover:bg-primary-white hover:text-primary-gray transition-all ease-in-out duration-300 border-secondary-text/20 rounded-lg lg:rounded-xl py-3 lg:py-3 px-8 md:px-10 text-primary-white"
              >
                See Work
              </button>
              <a
                href="https://drive.google.com/file/d/1P3hz96BxxacBgLeZl4tyCiaPuosuGNOH/view?usp=sharing"
                target="_blank"
              >
                <button className="text-secondary-text text-lg lg:text-xl font-semibold hover:text-primary-white ease-in-out duration-300 transition-all">
                  RESUME
                </button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-[40%] mt-5 transition-transform duration-300"
          >
            <Image
              src={user}
              alt="Aaliyan Mansoor"
              height={1080}
              width={1080}
              className="lg:w-[500px] w-full object-cover h-[400px] lg:h-[500px]"
            />
          </motion.div>
        </motion.div>
      </Wrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={socialIconVariants}
        className="absolute hidden-element top-[40%] xl:right-7 md:right-[-4.5rem] xl:block md:hidden sm:hidden hidden"
      >
        <div className="flex flex-col items-center gap-y-8">
          {socialIcon.map((e, index) => (
            <a
              href={e.link}
              key={index}
              className="bg-secondary-text/10 cursor-pointer hover:bg-primary-white/30 ease-linear duration-200 transition-all rounded-lg text-secondary-text flex flex-col justify-center items-center p-3"
            >
              <span>{e.icon}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
