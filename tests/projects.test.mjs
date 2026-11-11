import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProjects } from "../src/lib/projects.js";
import { projects } from "../src/data/projects.js";

test("the featured view shows only the curated projects in order", () => {
  assert.deepEqual(filterProjects(projects, "featured").map((project) => project.id), [
    "inventra", "nexus-ai", "tarifa-clara", "neurochess", "fitcoach",
  ]);
  assert.deepEqual(filterProjects(projects, "featured", "tarifa clara").map((project) => project.id), ["tarifa-clara"]);
  assert.equal(filterProjects(projects, "featured", "NovaSalud").length, 0);
  assert.equal(filterProjects(projects, "web", "NovaSalud")[0].id, "novasalud");
  assert.equal(filterProjects(projects, "android", "DoIt")[0].id, "doit");
});

test("search combines discipline and technology instead of replacing the filter", () => {
  assert.deepEqual(
    filterProjects(projects, "web", "react").map((p) => p.id),
    ["nexus-ai", "novasalud", "inventra", "tuerka", "portfolio", "app-escuela"],
  );
  assert.equal(filterProjects(projects, "android", "react").length, 0);
  assert.equal(
    filterProjects(projects, "all", "   FITCOACH  ")[0].id,
    "fitcoach",
  );
  assert.equal(filterProjects(projects, "all", "no-coincidencia").length, 0);
});

test("AI projects are discoverable by discipline and their backend stack", () => {
  assert.deepEqual(
    filterProjects(projects, "ai").map((project) => project.id),
    ["nexus-ai", "neurochess"],
  );
  assert.equal(filterProjects(projects, "web", "postgresql")[0].id, "nexus-ai");
});
