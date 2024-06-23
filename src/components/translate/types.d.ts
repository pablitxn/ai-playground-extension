interface SelectLanguageProps {
  languages: Languages[]
  selectLanguage: (SelectedLanguage) => void
  selectedLanguage: SelectedLanguage
}

interface FormProps {
  onSubmit: (text: string) => void
}

interface OutputProps {
  translation: Message
}

interface TranslateProps {
  translation: Message
  translate: (text: string) => void
  languages: Languages[]
  selectLanguage: (payload: SelectedLanguage) => void
  selectedLanguage: SelectedLanguage
}
