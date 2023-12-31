import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProjectCardComponent = ({ projectName }) => {
  return (
    <div
      className="ProjectCard p-4 xl:p-4 mx-16 my-6 md:mx-4 lg:mx-0 xl:mx-0 md:my-5 lg:my-5 xl:my-5 w-2/3 md:w-1/45 lg:w-1/24 xl:w-1/24  bg-sky-500 hover:bg-slate-700 rounded-lg"
      // style={{ width: "220px" }}
    >
      <div className="cardImg mb-2">
        <img
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="html"
          className="rounded-md"
        />
      </div>
      <div className="flex my-3">
        <div className="flex-grow">
          <span
            to={`/project/${projectName}`}
            className="font-bold text-cyan-50 tracking-wider"
            title="Preview"
          >
            <Link to={`/project/${projectName}`}>
              <Icon
                icon="icon-park-outline:preview-open"
                className="inline mr-1 text-xl  hover:underline hover: hover:text-slate-500"
              />
            </Link>
            Amazon
          </span>
        </div>
        <div className=" flex text-purple-700 font-semibold items-center justify-end ml-3">
          <div className="">CitiusTech</div>
        </div>
      </div>
      <div className="flex my-1 text-cyan-50">
        <div>
          <span className="tracking-wider">Technology:</span>
        </div>
        <div className="ml-3">
          <div className="tracking-wide">Angular</div>
        </div>
      </div>
      <div className="flex my-1 text-cyan-50">
        <div>
          <span className="tracking-wider">Last Worked:</span>
        </div>
        <div className="ml-3">
          <div className="tracking-wide">Jul 2023</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardComponent;
