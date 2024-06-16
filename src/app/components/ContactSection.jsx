"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-3 bg-blue-400 rounded-3xl"
    >
      <div className="px-8">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-white mb-4 max-w-md">
          {" "}
          We are active on social media, broadcasting news about Takoyaki in
          Latvia. We frequently offer discount events, so don’t miss these
          opportunities! <br /> If you have any questions or interests for our
          events, feel free to contact us via email here!
        </p>
        <div className="flex flex-row space-x-2">
          <Link href="https://www.lu.lv/en/">
            <IconContext.Provider value={{ color: "white", size: "40px" }}>
              <AiOutlineInstagram />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.lu.lv/en/">
            <IconContext.Provider value={{ color: "white", size: "40px" }}>
              <FaFacebook />
            </IconContext.Provider>
          </Link>
          <Link href="https://www.lu.lv/en/">
            <IconContext.Provider value={{ color: "white", size: "40px" }}>
              <FaSquareXTwitter />
            </IconContext.Provider>
          </Link>
        </div>
        <h5 className="text-xl mt-8 font-bold text-white my-2">Location</h5>
        <iframe
          width="450"
          height="250"
          frameborder="0"
          referrerpolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_MAP}&q=University of Latvia
          &language=en`}
          allowfullscreen
        ></iframe>
      </div>

      <form className="flex flex-col px-8" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="levi.ackermann@google.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about ..."
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
        {
          // If the email was submitted successfully, show a success message.
          emailSubmitted && (
            <p className="text-white-500 bold text-sm mt-2">
              Email sent successfully!
            </p>
          )
        }
      </form>
    </section>
  );
};

export default ContactSection;
