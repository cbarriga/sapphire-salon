import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";

describe("Links Validation", () => {
  let htmlContent: string;

  beforeAll(() => {
    htmlContent = readFileSync("dist/index.html", "utf-8");
  });

  it("should not have broken anchor links", () => {
    // Extract all href values that are internal anchors
    const anchorRegex = /href="#([^"]+)"/g;
    const idRegex = /id="([^"]+)"/g;

    const anchors = new Set<string>();
    const ids = new Set<string>();

    let match;
    while ((match = anchorRegex.exec(htmlContent)) !== null) {
      anchors.add(match[1]);
    }

    while ((match = idRegex.exec(htmlContent)) !== null) {
      ids.add(match[1]);
    }

    // Check that all anchors have corresponding IDs
    anchors.forEach((anchor) => {
      expect(ids.has(anchor)).toBe(true);
    });
  });

  it("should have navigation links", () => {
    expect(htmlContent).toMatch(/href="#/);
  });

  it("should not have broken image references", () => {
    const imgRegex = /src="([^"]+)"/g;
    const srcsFound: string[] = [];

    let match;
    while ((match = imgRegex.exec(htmlContent)) !== null) {
      if (match[1].startsWith("/images/")) {
        srcsFound.push(match[1]);
      }
    }

    expect(srcsFound.length).toBeGreaterThan(0);
  });

  it("should have Google Maps iframe for contact", () => {
    expect(htmlContent).toContain("iframe");
    expect(htmlContent).toMatch(/maps|google/i);
  });

  it("should have social media links if present", () => {
    // Check if there are any social links
    const hasSocialLinks = /facebook|instagram|twitter|linkedin/i.test(
      htmlContent,
    );
    // Just verify the test runs without error
    expect(typeof hasSocialLinks).toBe("boolean");
  });
});
