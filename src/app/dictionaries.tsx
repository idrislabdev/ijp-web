const dictionariesContactUs: any = {
  id: () => import("./dictionaries/contact-us/id.json").then((module) => module.default),
  en: () => import("./dictionaries/contact-us/en.json").then((module) => module.default),
};

export const getDictionariesContactUs = async (locale: any) => dictionariesContactUs[locale]();