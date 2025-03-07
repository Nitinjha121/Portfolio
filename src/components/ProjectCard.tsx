import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { PROJECT_CARD_TECH_LENGTH, projects } from "@/constants";

type ProjectCardProps = (typeof projects)[0];

export default function ProjectCard({
  name,
  description,
  image,
  technologies,
  liveUrl,
  githubLink,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const renderButtons = (
    <div className="flex gap-8">
      {liveUrl && (
        <Button
          className="w-full"
          onClick={() => window.open(liveUrl, "_blank")}
        >
          View Live Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      )}

      {githubLink && (
        <Button
          className="w-full"
          onClick={() => window.open(githubLink, "_blank")}
        >
          Github
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card
          className="h-full cursor-pointer border-2 dark:border-gray-700 dark:bg-card/95 dark:hover:border-primary/30 transition-colors hover:border-primary/20 shadow-sm dark:shadow-lg flex flex-col justify-between"
          onClick={() => setIsOpen(true)}
        >
          <CardHeader>
            <div
              className="w-full h-48 bg-cover bg-center rounded-t-lg"
              style={{ backgroundImage: `url(${image})` }}
            />
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.slice(0, PROJECT_CARD_TECH_LENGTH).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {renderButtons}
          </CardContent>
        </Card>
      </motion.div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 dark:border-2 dark:border-gray-700 dark:bg-card/95">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  exit: { duration: 0.15 },
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="space-y-6 p-6"
              >
                <DialogHeader className="pb-4">
                  <DialogTitle className="text-2xl">{name}</DialogTitle>
                  <DialogDescription className="text-base">
                    {description}
                  </DialogDescription>
                </DialogHeader>

                <div
                  className="w-full h-64 bg-cover bg-center rounded-lg border border-border/20"
                  style={{ backgroundImage: `url(${image})` }}
                />

                <div className="space-y-6">
                  {/* <div className="dark:bg-card/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      Project Details
                    </h3>
                    <p className="text-muted-foreground">{details}</p>
                  </div> */}

                  {/* <div className="dark:bg-card/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">My Role</h3>
                    <p className="text-muted-foreground">{role}</p>
                  </div> */}

                  <div className="dark:bg-card/50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {renderButtons}
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
