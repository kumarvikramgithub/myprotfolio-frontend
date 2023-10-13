import React, { useState } from "react";

const ContactDetails = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input
        type="text"
        value={contact.name}
        name="name"
        onChange={(e) => updateContact(e)}
        placeholder="Your name"
        className="my-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
      />
      <input
        type="email"
        value={contact.email}
        name="email"
        onChange={(e) => updateContact(e)}
        placeholder="Your email"
        className="my-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
      />
      <textarea
        name="message"
        id="msg"
        rows="5"
        placeholder="Your message"
        style={{ resize: "none" }}
        className="my-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      ></textarea>

      <button
        type="submit"
        className="my-3 inline-block px-3 py-2 text-slate-50 font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactDetails;
