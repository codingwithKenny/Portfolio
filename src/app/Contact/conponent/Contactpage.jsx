import React from 'react'
import { motion } from 'framer-motion'

const ContactPage = ({ darkMode }) => {
  return (
    <motion.div
      className={`${darkMode ? 'app.dark-mode' : ''} text-center py-20`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="text-xl md:text-2xl mt-10 mb-3">
        Thank you for taking your time — I'm excited to hear from <span className="font-semibold text-blue-500">YOU!</span>
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-5">Contact Ridwat</h1>
      <p className="text-gray-500 max-w-xl mx-auto">
        Whether you want to collaborate, hire me, or just say hello — feel free to drop a message.
      </p>
    </motion.div>
  )
}

export default ContactPage
