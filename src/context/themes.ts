export type ThemeId = "dark-tech" | "light-clean" | "ocean-blue" | "purple-neon" | "cyber-green" | "sunset" | "midnight-black" | "system";

export interface ThemeMeta {
  id: ThemeId;
  label: string;
  colorPreview: string;
}

export const THEMES: ThemeMeta[] = [
  { id: "dark-tech", label: "Dark Tech", colorPreview: "#22D3EE" },
  { id: "light-clean", label: "Light Clean", colorPreview: "#2563EB" },
  { id: "ocean-blue", label: "Ocean Blue", colorPreview: "#3B82F6" },
  { id: "purple-neon", label: "Purple Neon", colorPreview: "#A855F7" },
  { id: "cyber-green", label: "Cyber Green", colorPreview: "#22C55E" },
  { id: "sunset", label: "Sunset", colorPreview: "#F97316" },
  { id: "midnight-black", label: "Midnight Black", colorPreview: "#6366F1" },
  { id: "system", label: "Système", colorPreview: "linear-gradient(90deg,#07111F 50%,#ffffff 50%)" },
];

export const DEFAULT_THEME: ThemeId = "dark-tech";
export const STORAGE_KEY = "openit_theme_v1";