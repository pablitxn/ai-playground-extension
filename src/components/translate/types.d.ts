interface SelectLanguageProps {
  languages: string[]
  selectLanguage: ({ from, to }: { from: string; to: string }) => void
  selectedLanguage: {
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
