"use client";
import { motion } from "framer-motion";
import useHandleMailme from "@/app/hook/useHandleMessage.js";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@/app/Home/component/Icon";

const ContactInfo = ({ darkMode }) => {
  const { onSubmit, form, handleChange } = useHandleMailme();

  return (
    <section
      className="
        relative w-full 
        flex flex-col justify-center 
        bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        text-gray-800 dark:text-gray-100 
        transition-all duration-500
        overflow-y-auto
        px-6 md:px-12 lg:px-20 py-16 mt-12 lg:mt-0
      "
    >
      {/* Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ec4899_0%,_transparent_40%)] opacity-40 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#a855f7_0%,_transparent_40%)] opacity-40 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            Let’s Connect 🌸
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I’d love to hear from you! Whether you have a project idea,
            collaboration request, or just want to say hello — drop me a message 💌
          </p>

          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faPhone}
                className=" text-2xl drop-shadow-md"
              />
              <p className="text-lg font-medium">+234 810 611 4218</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" text-2xl drop-shadow-md"
              />
              <p className="text-lg font-medium">okunlolaridwanat@gmail.com</p>
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <Icon />
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            relative z-10 
            bg-white/70 dark:bg-white/10 
            backdrop-blur-2xl p-8 rounded-2xl 
            border border-pink-200/40 dark:border-white/10 
            shadow-2xl shadow-pink-100/40 dark:shadow-pink-900/10
          "
        >
          <h3 className="text-3xl font-semibold mb-5 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
            Send a Message
          </h3>

          <Form {...form}>
            <div className="space-y-4">
              <Input
                className="w-full border dark:border-pink-700 text-gray-800 dark:text-white focus:border-pink-500 focus:ring-0 transition-all duration-300"
                placeholder="Full Name"
                {...form.register("name")}
                onChange={handleChange}
              />
              <Input
                className="w-full  border dark:border-pink-700 text-gray-800 dark:text-white focus:border-pink-500 focus:ring-0 transition-all duration-300"
                placeholder="Email"
                {...form.register("email")}
                onChange={handleChange}
              />
              <textarea
                className="w-full h-28 border  dark:border-pink-700 text-gray-800 dark:text-white  focus:ring-0 rounded-md p-3 transition-all duration-300"
                placeholder="Your Message"
                {...form.register("message")}
                onChange={handleChange}
              />
              <Button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-300/40 dark:hover:shadow-pink-800/30"
                onClick={onSubmit}
              >
                Send Message ✨
              </Button>
            </div>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
