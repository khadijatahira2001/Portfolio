import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_35h7ptu",
        "template_cphuinc",
        form.current,
        "Z4dFGmTDZ0v1y5KCb"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-10 min-h-screen gap-6 md:gap-10">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 text-neutral-500 p-5 sm:ml-0 lg:ml-10"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <ul className="space-y-2">
          <li className="flex items-center">
            <i className="fas fa-phone-alt mr-2 text-2xl"></i> +(923) 154 300359
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-2 text-2xl"></i> {CONTACT.email}
          </li>
        </ul>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-lg shadow-lg md:w-1/2  w-full"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <label className="font-bold text-neutral-700">Your Name</label>
          <input
            type="text"
            name="user_name"
            className="border p-2 rounded"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="font-bold text-neutral-700">Email Address</label>
          <input
            type="email"
            name="user_email"
            className="border p-2 rounded"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="font-bold text-neutral-700">Message</label>
          <textarea
            name="message"
            className="border p-2 rounded"
            placeholder="Type your message here"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800"
          >
            SEND MESSAGE
          </button>
        </form>
      </motion.div>
    </div>
  );
}
