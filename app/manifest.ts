import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Triven Biomedicals Private Limited",
    short_name: "Triven",
    description:
      "Distribution, Sourcing and Trade Partner for Healthcare, Food and Institutional Supply Chains.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f1e8",
    theme_color: "#1b4d3a",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
