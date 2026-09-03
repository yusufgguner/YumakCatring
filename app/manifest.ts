import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Yumak",
    description: site.description,
    lang: "tr-TR",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1c1917",
    icons: [
      { src: "/images/logo/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/logo/favicon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/images/logo/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
