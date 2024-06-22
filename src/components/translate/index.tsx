import React, { useState } from "react"
import Form from "./form"
import Output from "./output"
import SelectLanguage from "./select-language"

const Translate: React.FC = () => {
  const [languageFrom, setLanguageFrom] = useState("English")
  const [languageTo, setLanguageTo] = useState("Spanish")
  const [translation, setTranslation] = useState("")

  const handleTranslate = (text: string) => {
    setTranslation(`Translated text in ${languageTo}: ${text}`)
  }

  return (
    <div className="p-4 bg-gradient-to-br from-bgGradientFrom to-bgGradientTo text-white min-h-screen">
      <div className="max-w-md mx-auto bg-gradient-to-br from-bgGradientCardFrom to-bgGradientCardTo p-8 border border-borderColor rounded-lg">
        <SelectLanguage label="From" options={["English", "Spanish"]} onChange={setLanguageFrom} />
        <SelectLanguage label="To" options={["Spanish", "English"]} onChange={setLanguageTo} />
        <Form onSubmit={handleTranslate} />
        <Output translation={translation} />
      </div>
    </div>
  )
}

export default Translate
