import { describe, it, expect, beforeAll } from "vitest";
import { execSync } from "child_process";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

describe("Build", () => {
  beforeAll(() => {
    // Build the project
    execSync("npm run build", { stdio: "pipe" });
  });

  it("should generate dist directory", () => {
    expect(existsSync("dist")).toBe(true);
  });

  it("should create index.html", () => {
    expect(existsSync("dist/index.html")).toBe(true);
  });

  it("should contain expected HTML structure", () => {
    const htmlContent = require("fs").readFileSync("dist/index.html", "utf-8");
    expect(htmlContent).toContain("<html");
    expect(htmlContent).toContain("</html>");
    expect(htmlContent).toContain("Sapphire Salon");
  });

  it("should generate all necessary CSS and JS assets", () => {
    const distDir = "dist";
    const files = readdirSync(distDir, { recursive: true });
    const hasAssets = files.some(
      (f: any) => f.toString().endsWith(".js") || f.toString().endsWith(".css"),
    );
    expect(hasAssets).toBe(true);
  });
});
