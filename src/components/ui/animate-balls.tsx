import { motion } from "framer-motion";

const FloatingBalls = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main Ball - Cross-screen diagonal movement */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 
        dark:from-pink-800/30 dark:via-purple-800/30 dark:to-indigo-800/30"
        initial={{ x: "-100vw", y: "-100vh" }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["-100vh", "100vh", "-100vh"],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Vertical Traversing Ball */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-300 via-blue-300 to-pink-200 
        dark:from-indigo-800/30 dark:via-blue-800/30 dark:to-pink-800/30"
        initial={{ x: "50vw", y: "-50vh" }}
        animate={{
          x: ["50vw", "80vw", "20vw", "50vw"],
          y: ["-50vh", "150vh", "-50vh"],
          scale: [0.6, 1, 0.8],
          rotate: [0, 270, 360],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Horizontal Sweeping Ball */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-red-300 
        dark:from-purple-800/30 dark:via-pink-800/30 dark:to-red-800/30"
        initial={{ x: "-100vw", y: "50vh" }}
        animate={{
          x: ["-100vw", "100vw", "-100vw"],
          y: ["50vh", "70vh", "30vh", "50vh"],
          scale: [0.7, 1.1, 0.7],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default FloatingBalls;
