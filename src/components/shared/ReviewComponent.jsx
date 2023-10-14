import React from 'react'
import { Icon } from "@iconify/react";

const ReviewComponent = () => {
  return (
    <div
      className="bg-slate-400 p-4 shadow-md my-2 w-1/48 md:w-1/48 lg:w-1/32 xl:w-1/32"
      // style={{width: "340px"}}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
          style={{ width: "100px", height: "100px" }}
          className="rounded-full shadow-md"
        />
        <div className="flex text-slate-500 font-semibold items-center my-3">
          <div className="starImg"></div>
          <div className="starImg"></div>
          <div className="starImg"></div>
          <div className="starImg"></div>
          <div className="starImg"></div>
        </div>
        <span className="font-semibold uppercase tracking-wider text-slate-700">
          Kumar Vikram
        </span>
      </div>
      <div className=" px-2 my-5">
        <p className="text-white tracking-wider text-lg text-justify">
          <Icon icon="fa-solid:quote-left" className="inline" />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          autem quam. Libero officiis laboriosam, maiores dolor similique maxime
          in iusto consectetur nesciunt voluptatem, doloribus, quo sed porro
          dicta animi ratione.
          <Icon icon="fa-solid:quote-right" className="inline" />
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default ReviewComponent
