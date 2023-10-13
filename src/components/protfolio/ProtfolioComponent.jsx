import React from "react";
// import { Outlet } from "react-router-dom";
import SkillCardComponent from './../shared/SkillCardComponent';
import ProjectCardComponent from './../shared/ProjectCardComponent';
import ContactDetails from './../contacts/ContactDetails';
import ReviewComponent from './../shared/ReviewComponent';
const ProtfolioComponent = () => {
    const mySkills = [1,2,3,4,5,6,7,8]
  return (
    <div className="w-full h-full">
      <div className="px-20 bg-slate-200 hero-section flex justify-evenly items-center flex-wrap">
        <div className="flex-grow">
          <div className="pl-40">
            <h1 className="text-5xl font-bold uppercase text-sky-500 leading-10 italic">
              Hello,
            </h1>
            <span className=" inline-block text-xl font-semibold text-slate-500 my-8">
              I am a
            </span>
            <span className="font-bold text-2xl ml-2 tracking-wider text-green-500">
              Full-Stack Developer &#128578;
            </span>
            <br />
            <div className="p-2 border-2 border-solid border-slate-300 inline-block font-semibold rounded-md hover:cursor-pointer hover:bg-slate-300 text-purple-500 tracking-wide">
              Hire Me
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-16 pb-0 bg-slate-100 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="Profile"
              style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              className="heroImg"
            />
          </div>
        </div>
      </div>

      {/* About Me section */}

      <div className="w-full aboutMe my-10  flex flex-col items-center justify-center">
        <h1 className="text-3xl underline uppercase text-purple-700 font-bold">
          About Me
        </h1>
        <div style={{ width: "50%" }} className="my-8 leading-8">
          <p className="font-semibolds tracking-wider text-md text-justify">
            Hi, My name is{" "}
            <span className="font-bold italic">KUMAR VIKRAM</span>. I am
            Full-stack Developer with 2 years of experties in MERN and MEAN
            stack Development. I have completed my Bachelor of Technology (B.
            Tech.) in Computer Science and Engineering (CSE) in August 2021.
          </p>
        </div>
        <div className="p-2 border-2 border-solid border-sky-500 rounded-md text-cyan-100 inline-block font-semibold tracking-wider bg-sky-500 hover:cursor-pointer hover:bg-purple-500 hover:border-purple-500 hover:text-white">
          Download Resume
        </div>
      </div>

      {/* my Skills Section */}

      <div className="mySkills md:mx-32 lg:mx-32 my-16 p-12 bg-slate-100 shadow">
        <h1 className="text-4xl font-bold text-green-500 tracking-widest underline">
          My skills
        </h1>
        <div className="flex justify-between  flex-wrap">
          {mySkills.map((skill) => (
            <SkillCardComponent key={skill} />
          ))}
        </div>
      </div>

      {/* Experience section */}

      <div className="w-full aboutMe my-10  flex flex-col items-center justify-center">
        <h1 className="text-3xl underline uppercase text-purple-700 font-bold">
          Experiences
        </h1>
        <div className="flex justify-center items-center">
          <div className="my-8 leading-8 steps flex justify-center items-center">
            <div className="rounded-full stepsImg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="Profile"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div
            style={{ width: "100px", height: "2px" }}
            className="border-2 border-solid border-purple-500"
          ></div>
          <div className="flex flex-col justify-center items-center rounded-md p-4 bg-cyan-400 shadow-2xl">
            <div>
              <span className="font-semibold text-xl text-slate-50 tracking-wider">
                CitiusTech
              </span>
            </div>
            <div>
              <span className="font-semibold text-lg text-slate-500 tracking-wide">
                Software Engineer
              </span>
            </div>
            <div>
              <span className="font-semibold text-sm text-purple-500 tracking-wider">
                Nov 2021 - Jul 2023
              </span>
            </div>
          </div>
          <div
            style={{ width: "100px", height: "2px" }}
            className="border-2 border-solid border-purple-500"
          ></div>
          <div className="flex flex-col justify-center items-center rounded-md p-4 bg-slate-200 shadow-2xl">
            <div>
              <span className="font-semibold text-lg text-slate-500 tracking-wide">
                Open To Work
              </span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-sm text-purple-500 tracking-wider">
                Immediate joiner
              </span>
            </div>
            <div className="p-1 border-2 border-solid border-slate-300 rounded-md text-slate-400 inline-block font-semibold tracking-wider hover:cursor-pointer hover:bg-purple-500 hover:border-purple-500 hover:text-white">
              Download Resume
            </div>
          </div>
        </div>
      </div>

      {/* my Projects Section */}

      <div className="md:mx-24 lg:mx-24 my-16 p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <h1 className="text-4xl mb-8 font-bold text-slate-100 tracking-widest underline">
          Projects
        </h1>
        <div className="flex justify-between  flex-wrap">
          {mySkills.map((skill) => (
            <ProjectCardComponent key={skill} projectName="amazon" />
          ))}
        </div>
      </div>

      {/* my Education Section */}

      <div className="w-full aboutMe my-10  flex flex-col items-center justify-center">
        <h1 className="text-3xl underline uppercase text-purple-700 font-bold">
          Education
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div
            style={{ width: "1px", height: "150px" }}
            className="border-2 border-solid border-purple-500"
          ></div>
          <div className="flex justify-center items-center">
            <div className="bg-green-500 p-4 rounded-md">
              <span className="font-semibold text-lg text-slate-500 tracking-wider">
                Apr 2013 - Jul 2015
              </span>
            </div>
            <div
              style={{ width: "90px", height: "1px" }}
              className="border-2 border-solid border-purple-500"
            ></div>
            <div className="rounded-full border-2 border-solid border-purple-500">
              <div className="standared flex justify-center items-center">
                <span className="font-bold text-xl text-slate-900 tracking-wider">
                  10<sup>th</sup>
                </span>
              </div>
            </div>
            <div
              style={{ width: "40px", height: "1px" }}
              className="border-2 border-solid border-purple-500"
            ></div>
            <div className="bg-sky-700 p-4 rounded-md flex flex-col justify-center items-center">
              <span className="font-semibold text-lg text-slate-100 tracking-wide">
                S S High School Nauhatta
              </span>
              <span
                className="font-semibold text-lg text-slate-100 tracking-wide"
                title="Bihar School Examination Board"
              >
                (BSEB)
              </span>
            </div>
          </div>
          <div
            style={{ width: "1px", height: "100px" }}
            className="border-2 border-solid border-purple-500 shadow-2xl"
          ></div>
          <div className="border border-double font-bold border-slate-300 p-3 bg-cyan-100">
            71.4%
          </div>
          <div
            style={{ width: "1px", height: "100px" }}
            className="border-2 border-solid border-purple-500 shadow-2xl"
          ></div>
          <div className="flex justify-center items-center">
            <div className="bg-sky-700 p-4 rounded-md flex flex-col justify-center items-center">
              <span className="font-semibold text-lg text-slate-100 tracking-wide">
                Government Polytechnic Saharsa
              </span>
              <span
                className="font-semibold text-lg text-slate-100 tracking-wide"
                title="State Board Of Technical Education"
              >
                (SBTE)
              </span>
              <span
                className="font-semibold text-lg text-slate-100 tracking-wide"
                title="CSE"
              >
                Computer Science and Engineering
              </span>
            </div>
            <div
              style={{ width: "60px", height: "1px" }}
              className="border-2 border-solid border-purple-500"
            ></div>
            <div className="rounded-full border-2 border-solid border-purple-500">
              <div className="standared flex justify-center items-center">
                <span className="font-bold text-xl text-slate-900 tracking-wider">
                  Diploma
                </span>
              </div>
            </div>
            <div
              style={{ width: "185px", height: "1px" }}
              className="border-2 border-solid border-purple-500"
            ></div>
            <div className="bg-green-500 p-4 rounded-md">
              <span className="font-semibold text-lg text-slate-500 tracking-wider">
                Aug 2015 - Jul 2018
              </span>
            </div>
          </div>
          <div
            style={{ width: "1px", height: "100px" }}
            className="border-2 border-solid border-purple-500 shadow-2xl"
          ></div>
          <div className="border border-double font-bold border-slate-300 p-3 bg-cyan-100">
            74.4%
          </div>
          <div
            style={{ width: "1px", height: "100px" }}
            className="border-2 border-solid border-purple-500 shadow-2xl"
          ></div>
          <div className="relative flex justify-center items-center">
            <div className="bg-green-500 p-4 rounded-md">
              <span className="font-semibold text-lg text-slate-500 tracking-wider">
                Aug 2018 - Aug 2021
              </span>
            </div>
            <div
              style={{ width: "263px", height: "1px" }}
              className="border-2 border-solid border-purple-500"
            ></div>
            <div>
              <div className="heart flex justify-center items-center p-4 bg-slate-200 shadow-2xl"></div>
              <div className="btech absolute top-3 z-50">
                <span className="font-bold ml-2 text-xl text-slate-100 tracking-wider">
                  B. Tech.
                </span>
              </div>
            </div>
            <div
              style={{ width: "90px", height: "1px" }}
              className="border-2 border-solid border-purple-500"
            ></div>
            <div className="bg-sky-700 p-4 rounded-md flex flex-col justify-center items-center">
              <span className="font-semibold text-lg text-slate-100 tracking-wide">
                Maharaja Agrasen Institute of Technology
              </span>
              <span
                className="font-semibold text-lg text-slate-100 tracking-wide"
                title="Guru gobind singh indraprastha university"
              >
                (GGSIPU)
              </span>
              <span
                className="font-semibold text-lg text-slate-100 tracking-wide"
                title="CSE"
              >
                Computer Science and Engineering
              </span>
            </div>
          </div>
          <div
            style={{ width: "1px", height: "100px" }}
            className="border-2 border-solid border-purple-500 shadow-2xl"
          ></div>
          <div className="border border-double font-bold border-slate-300 p-3 bg-cyan-100">
            75.5%
          </div>
        </div>
      </div>

      {/* my Contact Section */}

      <div className="md:mx-24 lg:mx-24 my-16 p-12 bg-green-300">
        <label className="block text-center text-green-700 uppercase  text-3xl mb-5 py-3 shadow-sm font-semibold">
          Contact Us
        </label>
        <div className=" flex md:flex-row justify-center md:items-start items-center flex-col-reverse ">
          <div className="flex-grow md:mx-10 md:w-1/2 lg:w-1/2 mx-5 w-full">
            <ContactDetails />
          </div>
          <div className="class text-3xl my-10">
            <div className="bg-sky-500 flex flex-col justify-start items-start px-10">
              <h1 className="text-white mt-5 tracking-wider font-bold text-4xl">
                Let's Talk.
              </h1>
              <span className="text-sm my-5 text-white tracking-wider">
                Share your excitement, suggestion or queriy with us.
              </span>
              <span className="text-sm mb-10 underline text-white tracking-wider font-semibold">
                help@kumarhow.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* my Client Review Section */}

      <div className="md:mx-24 my-16 p-4 border-2 border-solid border-slate-200">
        <h1 className="text-4xl text-center mb-8 font-bold text-sky-500 tracking-widest">
          Review and Appreciation
        </h1>
        <div className=" flex md:justify-between justify-center items-center flex-wrap my-10 ">
          {mySkills.push(8) &&
            mySkills.map((skill) => <ReviewComponent key={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default ProtfolioComponent;
