"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Glitch } from "react-teffex";

const Page = () => {

  return (
    <>
      <div className="relative flex flex-col justify-center items-center min-h-screen w-full overflow-hidden">
        {/* Background image */}
        <img
          src="background.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        {/* Main Content */}
        <div className="relative z-10 text-white w-full max-w-6xl mx-auto px-6 py-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-12 min-h-screen">
          {/* Left - Text Content */}
          <motion.div
            className="lg:w-1/2 w-full flex flex-col lg:text-start text-center"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:text-6xl text-4xl text-white font-extrabold drop-shadow-lg">
              I AM
            </div>
            <div className="lg:text-6xl text-4xl font-extrabold mt-1">
              {/* impliment react teffex */}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg">
                <Glitch text={"SUNIL REDDY"} />
              </span>
            </div>

            <div className="font-semibold lg:text-3xl text-xl mt-3">
              <span className="bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">a</span>
              <span className="text-white font-extrabold drop-shadow-md">
                <Typewriter
                  words={[
                    " Web Developer ",
                    " Rust Developer ",
                    " Solana Developer ",
                    " Blockchain Dev ",
                    " Tech Enthusiast ",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </div>

            {/* Animated line - Desktop */}
            <motion.div
              className="h-[3px] bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 hidden lg:block mt-6 mb-6 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 400,
              }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>

            {/* Animated line - Mobile */}
            <motion.div
              className="h-[3px] bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 lg:hidden block mt-5 mb-5 rounded-full mx-auto shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 250,
              }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>

            <div className="text-white/90 font-semibold text-xl lg:text-2xl tracking-wide">
              connect with me
            </div>

            {/* Social Links */}
            <div className="flex flex-row items-center space-x-8 mt-5 lg:justify-start justify-center">
              {/*all the links here */}
              <a href="https://www.instagram.com/0xsunill/" target="_blank" rel="noopener noreferrer">
                <div className="text-2xl lg:text-3xl text-white/80 hover:text-pink-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </a>

              <a href="https://twitter.com/0xSunill" target="_blank" rel="noopener noreferrer">
                <div className="text-2xl lg:text-3xl text-white/80 hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  <i class="fa-solid fa-x"></i>
                </div>
              </a>

              <a href="https://github.com/0xSunill" target="_blank" rel="noopener noreferrer">
                <div className="text-2xl lg:text-3xl text-white/80 hover:text-purple-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                  <i class="fa-brands fa-github"></i>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/karri-sunil-reddy-209249216" target="_blank" rel="noopener noreferrer">
                <div className="text-2xl lg:text-3xl text-white/80 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </a>

              <a href="https://0xsunill-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="text-2xl lg:text-3xl text-white/80 hover:text-amber-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
                  <i class="fa-solid fa-globe"></i>
                </div>
              </a>
            </div>


          </motion.div>

          {/* Right - Photo */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center items-center lg:justify-end"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[22rem] lg:w-[22rem] lg:h-[28rem] xl:w-[26rem] xl:h-[32rem]">
              {/* Ambient glow behind */}
              <div className="absolute inset-[-8px] rounded-2xl bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-600 blur-xl opacity-50 animate-pulse" />
              {/* Second subtle glow layer */}
              <div className="absolute inset-[-4px] rounded-2xl bg-gradient-to-tr from-violet-400 via-purple-600 to-fuchsia-400 opacity-80" />
              {/* Photo */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden p-[3px] bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-500">
                <img
                  src="me4.jpg"
                  alt="Sunil Reddy"
                  className="rounded-xl h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="relative z-10 w-full pb-4">
          <div className="text-center text-white/30 text-xs tracking-widest">
            Built with 💜 by <span className="text-white/50">@0xSunill</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
