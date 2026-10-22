import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProjects } from "../src/lib/projects.js";
import { projects } from "../src/data/projects.js";

test("search combines discipline and technology instead of replacing the filter", () => {
  assert.deepEqual(
    filterProjects(projects, "web", "react").map((p) => p.id),
    ["nexus-ai", "app-escuela", "portfolio"],
  );
  assert.equal(filterProjects(projects, "android", "react").length, 0);
  assert.equal(
    filterProjects(projects, "all", "   FITCOACH  ")[0].id,
    "fitcoach",
  );
  assert.equal(filterProjects(projects, "all", "no-coincidencia").length, 0);
});

test("NEXUS AI is discoverable by its analytics discipline and backend stack", () => {
  assert.deepEqual(
    filterProjects(projects, "ai").map((project) => project.id),
    ["nexus-ai"],
  );
  assert.equal(filterProjects(projects, "web", "postgresql")[0].id, "nexus-ai");
});
