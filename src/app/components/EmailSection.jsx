"use client";
import React, { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email using the first template
      const result1 = await emailjs.sendForm(
        "service_kin6hgf", // Replace with your Service ID
        "template_wstad1q", // Replace with your first Template ID
        e.target,
        "X_oxiKGYanopIjX-0" // Replace with your User ID
      );

      // Send email using the second template
      const result2 = await emailjs.sendForm(
        "service_kin6hgf", // Replace with your Service ID
        "template_mimfxai", // Replace with your second Template ID
        e.target,
        "X_oxiKGYanopIjX-0" // Replace with your User ID
      );
      toast.success("Your email has been sent successfully!");

      // Reset the form after both requests
      e.target.reset();
    } catch (error) {
      console.error("Failed to send message:", error.text);
      toast.error("Failed to send your email. Please try again.");
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-8 relative bg-gradient-to-b from-gray-900 to-gray-800 px-6 md:px-12 rounded-lg shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary-900 to-transparent blur-3xl opacity-30"></div>
      <div className="z-10">
        <h5 className="text-3xl font-extrabold text-white mb-6">Contact</h5>
        <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
        I&apos;m always receptive to new opportunities. If you have any inquiries or would like to have a discussion, feel 
        free to reach out to me via email or the social media platforms listed below.
        </p>

        <div className="socials flex flex-row gap-8">
          <Link
            href="https://github.com/tronglm47"
            className="group flex items-center gap-4 hover:text-blue-500 transition duration-300"
          >
            <div className="relative">
              <img
                src="/github-color-svgrepo-com.svg"
                alt="GitHub"
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
            <span className="text-lg font-semibold text-white">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/trong-le-minh-0a10482b2/"
            className="group flex items-center gap-4 hover:text-blue-700 transition duration-300"
          >
            <div className="relative">
              <img
                src="/linkedin-svgrepo-com.svg"
                alt="LinkedIn"
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </div>
            <span className="text-lg font-semibold text-white">LinkedIn</span>
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form
          className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-primary-500 focus:border-primary-500"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Example: Project Collaboration"
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
              className="bg-gray-700 border border-gray-600 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg w-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default EmailSection;
