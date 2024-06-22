interface SelectLanguageProps {
  languages: string[]
  selectLanguage: (language: string) => void
  languageSelected: {
    from: string
    to: string
  }
}

interface FormProps {
  onSubmit: (text: string) => void
}

interface OutputProps {
  translation: string
}
