import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/constants/skills";
import { SkillFilterCategory } from "@/enum";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Skills() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(SkillFilterCategory.Featured);

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === SkillFilterCategory.All ||
      (category === SkillFilterCategory.Featured && skill.featured) ||
      skill.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Skills & Expertise</h1>
        <p className="text-muted-foreground">
          A comprehensive list of my technical skills and areas of expertise
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-[300px]"
        />

        <ScrollArea className="w-full overflow-x-auto">
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList>
              {Object.values(SkillFilterCategory).map((categoryName) => (
                <TabsTrigger
                  isActive={categoryName === category}
                  value={categoryName}
                  key={categoryName}
                >
                  {categoryName}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </ScrollArea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
