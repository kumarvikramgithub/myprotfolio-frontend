import React from "react";

const SkillCardComponent = () => {
  return (
    <div
      className="SkillCard p-4 md:w-1/24 lg:w-1/24 xl:w-1/24 w-1/45 my-5 bg-slate-700 rounded-lg"
      // style={{ width: "200px" }}
    >
      <div className="cardImg mb-2">
        <img
          src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="html"
          className="rounded-md"
        />
      </div>
      <div className="flex my-3">
        <div>
          <span className="font-bold text-cyan-50 tracking-wider">HTML 5</span>
        </div>
        <div className="flex text-slate-500 font-semibold items-center ml-3">
          <div className="starImg"></div>
          <div className="starImg"></div>
          <div className="starImg"></div>
          <div className="starImg"></div>
          <div className="starImg"></div>
        </div>
      </div>
      <div className="flex my-1 text-cyan-50">
        <div>
          <span className="tracking-wider">Experience:</span>
        </div>
        <div className="ml-3">
          <div className="tracking-wide">03 Years</div>
        </div>
      </div>
      <div className="flex my-1 text-cyan-50">
        <div>
          <span className="tracking-wider">Last Used:</span>
        </div>
        <div className="ml-3">
          <div className="tracking-wide">2023</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCardComponent;
