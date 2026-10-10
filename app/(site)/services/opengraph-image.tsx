import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Sales, rentals and maintenance for NRI property owners — Living";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    "Buy well. Sell quietly",
    "Sales · Rentals · Maintenance · NRI Concierge",
  );
}
