"use client"

import { motion } from "framer-motion"
import { Code, Paintbrush, Megaphone, Smartphone } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12 mb-4 text-blue-500" />,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies and best practices.",
  },
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-green-500" />,
    title: "System Architecture",
    description: "Designing scalable, maintainable systems that grow with your business needs.",
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-yellow-500" />,
    title: "Technical Consulting",
    description: "Strategic guidance on technology decisions, team building, and engineering processes.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-purple-500" />,
    title: "Performance Optimization",
    description: "Improving application speed, scalability, and user experience through technical excellence.",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Engineering Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-700 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
