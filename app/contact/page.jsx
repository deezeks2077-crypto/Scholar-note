
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { CiMail } from "react-icons/ci";

const page = async () => {
    const session = await auth()

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE – INFO */}
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-600 mb-6">
            Have a question, suggestion, or need support? Reach out to the
            Scholarnote team and we’ll get back to you as soon as possible.
          </p>

          <p className="text-sm text-gray-500 mb-10">
            If you don’t hear from us within 48 hours, kindly check your spam
            folder.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-200">
                <FiPhone className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+234 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4 ">
              <div className="p-3 rounded-full bg-gray-200">
                <CiMail className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">schlornoteinfo@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-200">
                <FiMapPin className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Abuja, Nigeria</p>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10">
            <p className="font-semibold text-gray-800 mb-3">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center text-xl">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl">
                <FaXTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-700 text-white flex items-center justify-center  text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />

            <textarea
              rows="5"
              placeholder="Tell us how we can help..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />

            <button
              type="submit"
              className="w-full rounded-lg text-[#154B48] border-[#154B48] py-4 font-semibold hover:bg-[#154B48]/10 transition border"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default page