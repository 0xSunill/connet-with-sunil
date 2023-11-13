"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Glitch } from "react-teffex";
const Page = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <img
          src="background.jpg"
          alt=""
          className="h-[100vh] object-cover  lg:object-fill lg:h-[100vh] lg:w-[100vw]"
        />
        <div className="text-white absolute lg:h-[40rem] lg:w-[80rem] w-[20rem] h-[40rem]  flex justify-center items-center lg:flex-row flex-col-reverse">
          <motion.div
            className=" lg:w-[40rem] w-[20rem] h-[40rem] flex flex-col lg:text-start text-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            <div className="lg:text-[5rem] text-[3rem] text-white font-extrabold lg:mt-28">
              I AM
            </div>
            <div className="lg:text-[5rem] text-[3rem] text-cyan-300 font-extrabold">
              {/* impliment react teffex */}
              <Glitch text={"SUNIL REDDY"} />
            </div>

            <div className="text-cyan-300 font-semibold lg:text-[3rem] text-[2rem]">
              a
              <span className="text-white font-extrabold">
                <Typewriter
                  words={[
                    " Web Developer ",
                    " Blockchain Dev",
                    " Tech Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </div>
            <motion.div
              className="h-[0.3rem] lg:w-[40rem] w-[20rem] bg-cyan-300 hidden lg:block mt-6 mb-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 530,
              }}
            ></motion.div>

            <motion.div
              className="h-[0.3rem] lg:w-[20rem] w-[20rem] bg-cyan-100 lg:hidden block mt-6 mb-6 "
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 320,
              }}
            ></motion.div>
            <div className="text-white font-semibold text-[2rem]">
              connect with me 
            </div>

            <div className="flex flex-row items-center space-x-10 mt-6 lg:justify-start justify-center">
              {/*all the links here */}
              <a href="https://www.instagram.com/sunil.eth/">
                <div className="text-3xl hover:text-pink-500">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </a>

              <a href="https://twitter.com/0xSunilReddy">
                <div className="text-3xl hover:text-black">
                  <i class="fa-solid fa-x"></i>
                </div>
              </a>

              <a href="https://github.com/0xSunday">
                <div className="text-3xl hover:text-black">
                  <i class="fa-brands fa-github"></i>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/karri-sunil-reddy-209249216">
                <div className="text-3xl hover:text-blue-500">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </a>

              <a href="https://sunfolio.vercel.app/">
                <div className="text-3xl hover:text-orange-300">
                  <i class="fa-solid fa-globe"></i>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            className=" lg:w-[40rem] lg:h-[40rem] w-[20rem] h-[20rem]"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            <img
            
              src="me.jpg"
              alt=""
              className=" border-2 border-blue-100 lg:rounded-full rounded-full h-full w-full object-cover 
            
            shadow-cyan-300 shadow-2xl
              "
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
// shadow-[1px_20px_50px_rgba(8,_112,_184,_0.7)]
export default Page;
