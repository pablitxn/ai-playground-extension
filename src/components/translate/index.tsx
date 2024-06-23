import React, { FC } from "react"
import Form from "./form"
import Output from "./output"
import SelectLanguage from "./select-language"



const Translate: FC<TranslateProps> = ({
  languages,
  selectedLanguage,
  selectLanguage,
  translation,
  translate
}) => (
  <div className="p-4 bg-gradient-to-br from-bgGradientFrom to-bgGradientTo text-white min-h-screen">
    <div className="max-w-md mx-auto bg-gradient-to-br from-bgGradientCardFrom to-bgGradientCardTo p-8 border border-borderColor rounded-lg">
      <SelectLanguage
        languages={languages}
        selectLanguage={selectLanguage}
        selectedLanguage={selectedLanguage}
      />
      <Output translation={translation} />
      <Form onSubmit={translate} />
    </div>
  </div>
)

export default Translate
