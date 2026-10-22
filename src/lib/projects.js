export function filterProjects(projects, category, query = "") {
  const normalized = query.trim().toLocaleLowerCase("es");
  return projects.filter(
    (project) =>
      (category === "all" || project.categories.includes(category)) &&
      (!normalized ||
        [project.title, project.summary, ...project.cardTags]
          .join(" ")
          .toLocaleLowerCase("es")
          .includes(normalized)),
  );
}
