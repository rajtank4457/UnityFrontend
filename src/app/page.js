"use client";

import { Slide } from 'react-reveal';
import Image from "next/image";
import Header from "./Components/Header";
import home5 from "./images/home5.png";
import home7 from "./images/home7.png";
import chatting from "./images/chatting.png";
import vconnected from "./images/vconnected.png";
import Footer from "./Components/Footer";
import secation4 from "./images/section4.png";
import section5 from "./images/section5.png";

export default function page() {
  return (
    <div
      className="bg-[#23272A] place-self-center"
      style={{ height: "850px", textAlign: "center" }}
    >
      <Header />
      <div className=" pt-0">
        <div
          className=" selection:text-blue-300 text-5xl font-bold text-[#ebe4e4] pb-4 animate__animated animate__fadeInUp"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          IMAGINE A PLACE
        </div>
        <p className="text-2xl text-[#ebe4e4] pr-[20px] selection:text-blue-300 pb-6 animate__animated animate__fadeInUp motion-safe:animate__duration-1s">
          ...where you can belong to a school club, a gaming group, or a
          worldwideart community. <br />
          Where just you and a handful of friends can spend time together. A
          place that makes it easy
          <br />
          to talk every day and hang out more often.
        </p>

        <div className="flex justify-center items-center gap-4">
          <button className=" text-2xl w-[300px] btn btn-circle  bg-[#FFFFFF] hover:text-blue-400 text-black-500 ">
            Download For Window
          </button>
          <button className=" text-2xl w-[300px] btn btn-circle  bg-[#FFFFFF] hover:text-blue-400 text-black-500 ">
            Open in Your Browser
          </button>
        </div>
      </div>

      <div className="text-[#ebedef] pl-[1200px] relative flex-shrink-0 pt-[200px]">
        <Image
          src={home5}
          className=" animate__animated animate__fadeInUp animate__delay-1s motion-safe:animate__duration-1s"
        />
        <Image
          src={home7}
          className=" absolute left-0 bottom-0 animate__animated animate__fadeInUp animate__delay-1s motion-safe:animate__duration-1s"
        />
      </div>

      {/*Section 2*/}

      <div className="flex items-center bg-white">
        <Slide up>
          <div className="pl-40 justify-end" style={{ paddingTop: "100px" }}>
            <Image
              src={chatting}
              style={{ height: "650px", width: "650px" }}
            />
          </div>
          <div className=" ml-28 text-left pl-32 pt-8 selection:text-blue-300">
            <h1 className="text-5xl font-bold text-[#010101]">
              Create an invite-
              <br />
              only place where
              <br />
              you belong
            </h1>
            <p className="text-2xl text-[#0c0404] pt-7">
              Discord servers are organized <br />
              into topic-based channels where <br />
              you can collaborate, share,
              <br />
              and just talk about your day
              <br />
              without clogging up a group chat.
            </p>
          </div>
        </Slide>
      </div>

      {/*Section 3*/}
      <div className="flex items-center bg-[#23272A]">
        <Slide up>
          <div className="ml-28 text-left pl-32 pt-8 selection:text-blue-300">
            <h1 className="text-5xl font-bold text-white">
              Where hanging
              <br />
              out is easy

            </h1>
            <p className="text-2xl text-white pt-7">
              Grab a seat in a voice channel when you’re free. <br />
              Friends in your server can see you’re around and <br />
              instantly pop in to talk without having to call.
            </p>
          </div>
          <div className="pl-40 justify-end" style={{ paddingTop: "100px" }}>
            <Image
              src={vconnected}
              
              style={{ height: "650px", width: "650px" }}
            />
          </div>
        </Slide>
      </div>

      {/*Section 4*/}
      <div className="flex items-center bg-white">
        <Slide up>
          <div className="pl-40 justify-end" style={{ paddingTop: "100px" }}>
            <Image
              src={secation4}
              
              style={{
                height: "550px",
                width: "550px",
              }}
            />
          </div>
          <div className="ml-28 text-left pl-32 pt-8 selection:text-blue-300">
            <h1 className="text-5xl font-bold text-[#010101]">
              From few to a <br /> fandom
            </h1>
            <p className="text-2xl text-[#0c0404] pt-7">
              Get any community running with moderation
              <br />
              tools and custom member access.
              <br />
              Give members special powers,
              <br />
              set up private channels, and more.
            </p>
          </div>
        </Slide>
      </div>
      <br />

      {/*Section 5*/}
      <div className=" pt-0  bg-[#23272A]">
        <Slide up>
          <div
            className="selection:text-blue-300 text-5xl font-bold text-[white] pb-4 "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            RELIABLE TECH FOR STAYING CLOSE
          </div>
          <p className="text-2xl text-[white] pr-[20px] selection:text-blue-300 pb-6 ">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games,
            <br /> or gather up and have a drawing session with screen share.
          </p>

          <div className="flex justify-center items-center gap-4">
            {" "}
            {/* Updated this line */}
            <Image
              src={section5}
              className="h-[600px] align-middle "
              style={{ width: "800px" }}
            />
          </div>
          <br /><br />
          <p className="text-4xl text-white  hover:text-blue-400">Ready to start your journey?</p><br /><br />
          <div className="flex justify-center items-center gap-4">

            <button className=" text-2xl w-[300px] btn btn-circle  bg-[#FFFFFF] hover:text-blue-400 text-black-500 ">
              Download For Window
            </button>
          </div>
        </Slide>
      </div>

      <Footer />
    </div>
  );
}
