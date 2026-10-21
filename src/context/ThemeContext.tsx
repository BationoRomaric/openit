import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from "react";
import { DEFAULT_THEME, STORAGE_KEY, type ThemeId } from "./themes";

interface ThemeContextValue {
  theme: ThemeId;
  resolvedTheme: Exclude<ThemeId, "system">;
  setTheme: (t: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const VALID_THEMES: ThemeId[] = ["dark-tech", "light-clean", "ocean-blue", "purple-neon", "cyber-green", "sunset", "midnight-black", "system"];

function getStored(): ThemeId {
  try {
    const s = localStorage.getItem(STORAGE_KEY) as ThemeId;
    if (s && VALID_THEMES.includes(s)) return s;
  } catch {}
  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(getStored);
  const [isDarkSystem, setIsDarkSystem] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkSystem(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsDarkSystem(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const resolvedTheme = useMemo(() => {
    if (theme !== "system") return theme;
    return isDarkSystem ? "dark-tech" : "light-clean";
  }, [theme, isDarkSystem]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.style.colorScheme = resolvedTheme === "light-clean" ? "light" : "dark";
  }, [resolvedTheme]);

  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch {}
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const c = useContext(ThemeContext);
  if (!c) throw new Error("useTheme must be used within ThemeProvider");
  return c;
}