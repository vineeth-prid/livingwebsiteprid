import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Living — property in India, managed like an investment, for NRI owners";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    "Your property in India, managed like an investment",
    "Sales · Rentals · Maintenance · Community support",
  );
}
