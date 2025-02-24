import React from "react";
import { Meteors } from "./ui/meteors";

function Contact() {
  return (
    <div className="flex justify-center h-screen w-full bg-gray-900">
      <Meteors number={20} />

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-left mb-10">Contact Us</h1>

        <div>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="border border-blue-500 rounded-lg py-2 px-4 w-full bg-gray-800 mt-5"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-blue-500 rounded-lg py-2 px-4 w-full bg-gray-800 mt-5"
            />
            <textarea
              placeholder="Message"
              className="border border-blue-500 rounded-lg px-4 w-full mt-5 bg-gray-800 py-4"
            />
            <button
              type="submit"
              className="px-8 py-2 rounded-md mt-5 bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
