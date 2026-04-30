import { describe, it, expect } from "vitest";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

describe("Images", () => {
  const requiredImages = [
    "header.png",
    "salon-1.jpg",
    "salon-2.jpg",
    "salon-3.jpg",
    "team-mia.jpg",
    "team-katy.jpg",
    "team-elisha.jpg",
    "team-dori.jpg",
    "cropped-logo_500.png",
  ];

  it("should have images directory", () => {
    expect(existsSync("public/images")).toBe(true);
  });

  requiredImages.forEach((image) => {
    it(`should have ${image}`, () => {
      const imagePath = join("public/images", image);
      expect(existsSync(imagePath)).toBe(true);
    });
  });

  it("should have all required images", () => {
    const imagesDir = "public/images";
    const files = readdirSync(imagesDir);
    requiredImages.forEach((image) => {
      expect(files).toContain(image);
    });
  });
});
