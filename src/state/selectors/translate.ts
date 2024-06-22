export const selectTranslations = (state: any) =>
  state.translate.translations

export const selectSelectedLanguage = (state: any) =>
  state.translate.selectedLanguage

export const languagesSelector = (state: any) =>
  state.translate.languages
