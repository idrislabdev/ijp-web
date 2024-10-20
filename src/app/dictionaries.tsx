const dictionariesHome = import("./dictionaries/home.json").then((module) => module.default)
const dictionariesAbout = import("./dictionaries/about-us.json").then((module) => module.default)
const dictionariesIjp = import("./dictionaries/ijp.json").then((module) => module.default)
const dictionariesIjsa = import("./dictionaries/ijsa.json").then((module) => module.default)
const dictionariesNews= import("./dictionaries/news.json").then((module) => module.default)
const dictionariesCarrers = import("./dictionaries/careers.json").then((module) => module.default)
const dictionariesContactUs = import("./dictionaries/contact-us.json").then((module) => module.default)

export const getDictionariesHome = async () => dictionariesHome;
export const getDictionariesAbout = async () => dictionariesAbout;
export const getDictionariesIjp = async () => dictionariesIjp;
export const getDictionariesIjsa = async () => dictionariesIjsa;
export const getDictionariesNews = async () => dictionariesNews;
export const getDictionariesCarrers = async () => dictionariesCarrers;
export const getDictionariesContactUs = async () => dictionariesContactUs;
