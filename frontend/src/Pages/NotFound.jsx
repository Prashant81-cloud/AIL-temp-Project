import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className=" w-full  flex items-center justify-center px-6 py-10">
      <div className="text-center">

        {/* Faded huge 404 number */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 40.1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[30vw] leading-none font-extrabold text-white select-none"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-[-5vw]"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mt-10">
            Lost in the Story?
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            The page you’re searching for doesn’t exist.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link to="/">
              <button className="px-8 py-3 bg-white text-black text-lg rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
