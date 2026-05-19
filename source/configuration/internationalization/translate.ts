const dictionaries = import.meta.glob<Record<string, string>>(
  "./*.json",
  { eager: true, import: "default" },
);

const languages = Object.keys(dictionaries).map(
  (path) => path.split("/").pop()!.replace(".json", ""),
);

export const defaultLanguage = languages[0];
export const availableLanguages = languages;

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export function translate(
  key: string,
  language: string = defaultLanguage,
): string {
  return dictionaries[`./${language}.json`][key];
}

export function translateCapitalized(
  key: string,
  language: string = defaultLanguage,
): string {
  return capitalize(translate(key, language));
}
