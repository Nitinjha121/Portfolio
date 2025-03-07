import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import AnimatedCross from "./ui/animated-cross";
import { OWNER_NAME } from "@/constants";

const links = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full max-md:bg-background bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            <Link
              className="text-foreground hover:text-primary transition-colors"
              href="/"
            >
              {OWNER_NAME}
            </Link>
          </motion.div>

          <div className="flex items-center gap-6">
            <AnimatedCross
              state={isOpen}
              className="md:hidden"
              onClick={() => setIsOpen((open) => !open)}
            />
            <ul
              className={`flex items-center max-md:flex-col max-md:absolute max-md:bg-background max-md:translate-y-full bottom-0 left-0 z-10 overflow-y-hidden transition-all duration-500 ${
                isOpen ? "max-md:h-48" : "max-md:h-0"
              } shadow md:shadow-none w-full`}
            >
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm transition-colors hover:text-primary font-bold p-4",
                      location === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>

                  <span className="flex mt-0.5 w-0 h-[0.175rem] bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
