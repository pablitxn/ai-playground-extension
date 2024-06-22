import React, { FC } from "react"
import Form from "./form"
import Output from "./output"
import SelectLanguage from "./select-language"

interface TranslateProps {
  translation: string
  translate: (text: string) => void
  languages: string[]
  selectLanguage: (language: string) => void
  languageSelected: {
    from: string
    to: string
  }
}

const Translate: FC<TranslateProps> = ({
  translation,
  languages,
  selectLanguage,
  translate,
  languageSelected
}) => (
  <div className="p-4 bg-gradient-to-br from-bgGradientFrom to-bgGradientTo text-white min-h-screen">
    <div className="max-w-md mx-auto bg-gradient-to-br from-bgGradientCardFrom to-bgGradientCardTo p-8 border border-borderColor rounded-lg">
      <SelectLanguage
        languages={languages}
        selectLanguage={selectLanguage}
        languageSelected={languageSelected}
      />
      <Output translation={translation} />
      <Form onSubmit={translate} />
    </div>
  </div>
)

export default Translate
