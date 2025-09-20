// 主题工具函数

export type Theme = "light" | "dark" | "system"

export function getStoredTheme(): Theme | null {
  if (typeof localStorage === "undefined") return null
  return localStorage.getItem("theme") as Theme | null
}

export function setStoredTheme(theme: Theme): void {
  if (typeof localStorage === "undefined") return
  localStorage.setItem("theme", theme)
}

export function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function getEffectiveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return getSystemTheme()
  }
  return theme
}

export function applyTheme(theme: "light" | "dark"): void {
  if (typeof document === "undefined") return

  const root = document.documentElement
  if (theme === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

// 主题变化监听器
export function onThemeChange(callback: (theme: "light" | "dark") => void): () => void {
  if (typeof window === "undefined") return () => {}

  const handler = (event: CustomEvent) => {
    callback(event.detail.theme)
  }

  window.addEventListener("themechange", handler as EventListener)

  return () => {
    window.removeEventListener("themechange", handler as EventListener)
  }
}

// 系统主题变化监听器
export function onSystemThemeChange(callback: (theme: "light" | "dark") => void): () => void {
  if (typeof window === "undefined" || !window.matchMedia) return () => {}

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? "dark" : "light")
  }

  mediaQuery.addEventListener("change", handler)

  return () => {
    mediaQuery.removeEventListener("change", handler)
  }
}
