import type {RootState} from "@/state"

export const selectTranslations = (state: RootState) =>
  state.translate.translations

export const selectSelectedLanguage = (state: RootState) =>
  state.translate.selectedLanguage

export const languagesSelector = (state: RootState) => state.translate.languages
