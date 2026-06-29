import { ui, defaultLang, type Lang } from "./ui";

/**
 * Extract the current locale from a URL.
 * `/en/…` → "en", everything else → default ("de").
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Return a typed `t(key)` look-up scoped to the given locale.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/**
 * Build the path for the other language version of the current page.
 * Default locale (de) has no prefix; en lives under /en/.
 */
export function getLocalizedPath(targetLang: Lang, currentPath: string): string {
  // Strip existing locale prefix
  const stripped = currentPath.replace(/^\/(en)(\/|$)/, "/");
  if (targetLang === defaultLang) return stripped || "/";
  return `/${targetLang}${stripped === "/" ? "/" : stripped}`;
}
