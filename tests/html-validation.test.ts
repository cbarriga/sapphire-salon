import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";

describe("HTML Validation", () => {
  let htmlContent: string;

  beforeAll(() => {
    htmlContent = readFileSync("dist/index.html", "utf-8");
  });

  it("should have proper DOCTYPE", () => {
    expect(htmlContent).toMatch(/<!DOCTYPE html>/i);
  });

  it("should have lang attribute on html tag", () => {
    expect(htmlContent).toMatch(/<html[^>]*lang=/i);
  });

  it("should have meta charset", () => {
    expect(htmlContent).toContain("charset");
  });

  it("should have viewport meta tag for mobile responsiveness", () => {
    expect(htmlContent).toContain("viewport");
  });

  it("should have title tag", () => {
    expect(htmlContent).toMatch(/<title>.*<\/title>/);
  });

  it("should have description meta tag", () => {
    expect(htmlContent).toContain("description");
  });

  it("should have favicon link", () => {
    expect(htmlContent).toContain("cropped-logo_500.png");
  });

  it("should have no console errors indicators", () => {
    expect(htmlContent).not.toContain("undefined");
  });

  it("should have proper body structure", () => {
    expect(htmlContent).toMatch(/<body[^>]*>[\s\S]*<\/body>/);
  });

  it("should contain navigation", () => {
    expect(htmlContent).toMatch(/nav|navigation|navlinks/i);
  });

  it("should contain services section", () => {
    expect(htmlContent).toContain("services");
  });

  it("should contain contact information", () => {
    expect(htmlContent).toContain("contact");
  });

  it("should have proper closing tags", () => {
    const openHtmlCount = (htmlContent.match(/<html/gi) || []).length;
    const closeHtmlCount = (htmlContent.match(/<\/html>/gi) || []).length;
    expect(openHtmlCount).toBe(closeHtmlCount);

    const openBodyCount = (htmlContent.match(/<body/gi) || []).length;
    const closeBodyCount = (htmlContent.match(/<\/body>/gi) || []).length;
    expect(openBodyCount).toBe(closeBodyCount);
  });
});
