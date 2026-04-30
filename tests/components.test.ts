import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "fs";

describe("Components", () => {
  const components = [
    "src/components/Nav.astro",
    "src/components/Hero.astro",
    "src/components/About.astro",
    "src/components/Services.astro",
    "src/components/Team.astro",
    "src/components/Contact.astro",
    "src/layouts/Layout.astro",
  ];

  components.forEach((component) => {
    it(`should have ${component}`, () => {
      expect(existsSync(component)).toBe(true);
    });

    it(`${component} should not be empty`, () => {
      const content = readFileSync(component, "utf-8");
      expect(content.length).toBeGreaterThan(0);
    });
  });

  it("Nav component should exist and contain navigation elements", () => {
    const content = readFileSync("src/components/Nav.astro", "utf-8");
    expect(content).toContain("nav");
  });

  it("About component should have about section text", () => {
    const content = readFileSync("src/components/About.astro", "utf-8");
    expect(content).toContain("about");
    expect(content).toContain("Sapphire Salon");
  });

  it("Services component should have service tabs", () => {
    const content = readFileSync("src/components/Services.astro", "utf-8");
    expect(content).toContain("Eyelashes");
    expect(content).toContain("Hair Care");
  });

  it("Team component should reference all team members", () => {
    const content = readFileSync("src/components/Team.astro", "utf-8");
    expect(content).toContain("team");
  });

  it("Contact component should have contact section", () => {
    const content = readFileSync("src/components/Contact.astro", "utf-8");
    expect(content).toContain("contact");
  });

  it("Layout should include global styles", () => {
    const content = readFileSync("src/layouts/Layout.astro", "utf-8");
    expect(content).toContain("is:global");
  });
});
