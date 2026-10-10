import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Contact Living — Kakkanad head office, Ernakulam, Kerala";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    "Let's talk about home",
    "Kakkanad, Ernakulam · +91 9344 36 7324 · talktous@theprid.com",
  );
}
