import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  category: string;
}

export default function SkillCard({ icon, name, description, category }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="h-full border-2 dark:border-gray-700 dark:bg-card/95 dark:hover:border-primary/30 transition-colors hover:border-primary/20 shadow-sm dark:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            <span>{name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-4">
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              {category}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}