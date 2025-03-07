import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-muted-foreground">
          Have a question or want to work together? Feel free to send me a message!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="border-2 dark:border-gray-700 dark:bg-card/95">
          <CardContent className="pt-6">
            <ContactForm />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}