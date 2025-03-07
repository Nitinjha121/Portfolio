export enum SkillCategory {
  Frontend = "Frontend",
  Backend = "Backend",
  Languages = "Languages",
  DevOps = "DevOps",
  // StateManagement = "State Management",
  // Testing = "Testing",
  AI_ML = "AI/ML",
}

export const SkillFilterCategory = {
  Featured: "Featured",
  All: "All",
  ...SkillCategory,
};

export const ProjectCategory = {
  All: "All",
  Work: "Client",
  Personal: "Personal",
};
