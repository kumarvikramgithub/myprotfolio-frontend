import React from 'react'
import {Link} from 'react-router-dom'
import { MenuContext } from "../../context/MenuContext";
const Navbar = () => {
  const {active, setActive} = React.useContext(MenuContext);
  // console.log(mycon)
  // const [active, setActive] = React.useState({
  //   value: 'home',
  //   child: false
  // });
  const activeClass = ` bg-slate-300 tracking-wide font-semibold text-fuchsia-500 border-b-2 border-solid border-fuchsia-500`;
  const hoverClass = ` hover:bg-slate-300 hover:tracking-wide hover:font-semibold hover:text-fuchsia-500`;

  return (
    <div className=" w-full h-20 bg-slate-100 flex items-center">
      <div className=" w-full bg-reds-800 flex items-center mx-20">
        <div className="logo">
          <img
            src="https://images.unsplash.com/photo-1629197258786-2f7b4e607840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
            alt="logo"
            className="w-16 h-16"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-end">
            <input
              className="w-2/3 rounded-lg p-2"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex-grow">
          <ul className=" flex justify-evenly items-center">
            <li
              className={` ${hoverClass} p-2 ${
                active.value === "home" ? activeClass : ""
              }`}
              onClick={() =>
                setActive({
                  value: "home",
                })
              }
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={` ${hoverClass}  p-2 ${
                active.value === "about" ? activeClass : ""
              }`}
              onClick={() =>
                setActive({
                  value: "about",
                })
              }
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={` ${hoverClass}  p-2 ${
                active.value === "protfolio" ? activeClass : ""
              }`}
              onClick={() =>
                setActive({
                  value: "protfolio",
                })
              }
            >
              <Link to="/myprotfolio">Protfolio</Link>
            </li>
            <li
              className={` ${hoverClass}  p-2 ${
                active.value === "account" ? activeClass : ""
              }`}
              onClick={() =>
                setActive({
                  value: "account",
                  child: true,
                })
              }
              onMouseOver={() =>
                setActive({
                  value: "account",
                  child: true,
                })
              }
              onMouseLeave={() =>
                setActive({
                  value: "account",
                  child: false,
                })
              }
            >
              <Link to="/account" className="relative">
                Account
              </Link>
              {active.value === "account" && active.child && (
                <div className="absolute">
                  <div className=" mt-2 border-s-8 border-solid border-s-transparent border-e-8 border-e-transparent border-b-8 border-b-slate-300 h-0 w-0"></div>
                  <ul className=" flex flex-col py-4 bg-slate-300 -ml-2 border border-solid border-slate-300 rounded z-10">
                    <li
                      className={`py-1 px-4 mx-2 hover:rounded hover:bg-slate-100`}
                    >
                      <Link to="login">Login</Link>
                    </li>
                    <li
                      className={`py-1 px-4 mx-2 hover:rounded hover:bg-slate-100`}
                    >
                      <Link to="signup">User</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
