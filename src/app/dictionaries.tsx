const dictionariesHome = import("./dictionaries/home.json").then((module) => module.default)
const dictionariesAbout = import("./dictionaries/about-us.json").then((module) => module.default)

export const getDictionariesHome = async () => dictionariesHome;
export const getDictionariesAbout = async () => dictionariesAbout;