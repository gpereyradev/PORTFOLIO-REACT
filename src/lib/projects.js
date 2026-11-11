import { featuredProjectIds } from "../data/projects.js";

export function filterProjects(projects, category, query = "") {
  const normalized = query.trim().toLocaleLowerCase("es");
  const candidates = category === "featured"
    ? featuredProjectIds.map((id) => projects.find((project) => project.id === id)).filter(Boolean)
    : projects;
  return candidates.filter(
    (project) =>
      (category === "all" || category === "featured" || project.categories.includes(category)) &&
      (!normalized ||
        [project.title, project.summary, ...project.cardTags]
          .join(" ")
          .toLocaleLowerCase("es")
          .includes(normalized)),
  );
}
