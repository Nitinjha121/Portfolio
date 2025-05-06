import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import {
  paragraphAboutMe,
  OWNER_NAME,
  socialMediaData,
  OWNER_LOCATION,
  OWNER_IMAGE_URL,
} from "@/constants";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary"
          >
            <img
              src={OWNER_IMAGE_URL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">{OWNER_NAME}</h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {OWNER_LOCATION}
            </span>
            {/* <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> john@example.com
            </span> */}
          </div>
          <div className="flex justify-center gap-4 mb-12">
            {socialMediaData.map((socialMedia, index) => (
              <motion.a
                key={index}
                href={socialMedia.url}
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full glassmorphism text-primary hover:text-primary/80"
                target="_blank"
              >
                <socialMedia.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-xl p-8 mb-8 border-2 dark:border-gray-700 dark:bg-card/95"
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>

          {paragraphAboutMe.map(
            (pNode, index) =>
              !pNode.hidden && (
                <p
                  className={cn(
                    "text-lg text-muted-foreground leading-relaxed",
                    {
                      "mb-6": index !== paragraphAboutMe.length - 1,
                    }
                  )}
                >
                  {pNode.text}
                </p>
              )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Web Application Development</h3>
              <p className="text-muted-foreground">Custom, scalable solutions tailored to your business needs</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Technical Consultation</h3>
              <p className="text-muted-foreground">Expert guidance on architecture and technology choices</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Performance Optimization</h3>
              <p className="text-muted-foreground">Improving speed and efficiency of existing applications</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">API Development & Integration</h3>
              <p className="text-muted-foreground">Connecting systems and streamlining workflows</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
