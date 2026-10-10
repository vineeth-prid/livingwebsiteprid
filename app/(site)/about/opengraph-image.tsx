import { ogImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Living — from The Prid's network, for its network";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage(
    "From our network, for our network",
    "Portfolio management for NRI property owners · A practice of The Prid",
  );
}
