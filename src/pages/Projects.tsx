import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { ProjectCategory } from "@/enum";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(ProjectCategory.All);

  const filteredProjects = projects.filter((project) => {
    const searchStr = search.toLowerCase();

    const matchesSearch =
      project.name.toLowerCase().includes(searchStr) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchStr)
      );
    const matchesCategory =
      category === ProjectCategory.All || project.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          A showcase of my recent work and personal projects
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-[300px]"
        />
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList>
            {Object.values(ProjectCategory).map((categoryName) => (
              <TabsTrigger
                value={categoryName}
                key={categoryName}
                isActive={category === categoryName}
              >
                {categoryName} Projects
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
