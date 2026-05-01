import localFont from "next/font/local";

export const lora = localFont({
  src: [
    { path: "./fonts/Lora-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Lora-Italic.woff2",  weight: "400", style: "italic" },
    { path: "./fonts/Lora-Bold.woff2",    weight: "700", style: "normal" },
    { path: "./fonts/Lora-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-lora",
});

export const sentient = localFont({
  src: [
    { path: "./fonts/Sentient-Regular.woff2",     weight: "400", style: "normal" },
    { path: "./fonts/Sentient-Italic.woff2",      weight: "400", style: "italic" },
    { path: "./fonts/Sentient-Bold.woff2",        weight: "700", style: "normal" },
    { path: "./fonts/Sentient-BoldItalic.woff2",  weight: "700", style: "italic" },
  ],
  variable: "--font-sentient",
});
