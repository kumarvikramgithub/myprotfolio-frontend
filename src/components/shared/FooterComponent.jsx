import React from 'react'
import { Link } from 'react-router-dom';
const FooterComponent = () => {
  return (
    <div className="bg-sky-700 md:px-24 md:py-10 ">
      <div className="border-b-2 border-solid border-b-slate-500 pb-5 flex justify-evenly items-center">
        <ul>
          <span className="text-slate-400 text-lg font-semibold tracking-widest underline inline-block">
            Menu
          </span>
          <li className="text-slate-300 font-semibold tracking-wide mt-3 mb-1 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/myprotfolio">Protfolio</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/account">Account</Link>
          </li>
        </ul>
        <ul>
          <span className="text-slate-400 text-lg font-semibold tracking-widest underline inline-block">
            Menu
          </span>
          <li className="text-slate-300 font-semibold tracking-wide mt-3 mb-1 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/myprotfolio">Protfolio</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/account">Account</Link>
          </li>
        </ul>
        <ul>
          <span className="text-slate-400 text-lg font-semibold tracking-widest underline inline-block">
            Menu
          </span>
          <li className="text-slate-300 font-semibold tracking-wide mt-3 mb-1 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/myprotfolio">Protfolio</Link>
          </li>
          <li className="text-slate-300 font-semibold tracking-wide my-1 hover:cursor-pointer">
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-4 pb-5 text-cyan-100 font-semibold tracking-wider">
        <span>Copyright &copy; KumarHow.com</span>
      </div>
    </div>
  );
}

export default FooterComponent
