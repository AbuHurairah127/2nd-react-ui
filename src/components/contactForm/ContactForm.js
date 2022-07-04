import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#F6F8F7] min-h-[70vh]">
      <div className="contactFormHeader lg:w-[50vw] pt-4 mx-auto">
        <h1 className="text-center text-[#292E3D] text-3xl font-bold xl:text-4xl">
          What can us do for you?
        </h1>
        <p
          className="text-center text-[#292E3D] xl:mt-4"
          style={{
            fontFamily: "work sans",
          }}
        >
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
      </div>
      <div
        className="inputForm w-screen flex flex-col items-center  "
        style={{
          fontFamily: "work sans",
        }}
      >
        <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Your Name"
            required
            className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
          />
        </div>
        <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Your Name"
            required
            className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
          />
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Phone"
            required
            className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
          />
        </div>
        <div className="w-[60vw] flex flex-row justify-between mt-5">
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-full px-3 py-2 h-40 outline-0 border-2 rounded-sm"
            required
          ></textarea>
        </div>
        <div className="w-[60vw] flex flex-row justify-center mt-5">
          <button className="w-[20vw] py-2 bg-blue-800 text-white md:font-bold tracking-wider rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
