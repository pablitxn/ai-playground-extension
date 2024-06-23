import {FC} from "react"
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
  <div className="text-white min-h-screen bg-gradient-to-br from-bgGradientFrom to-bgGradientTo p-4">
    <div className="mx-auto max-w-md rounded-lg border border-borderColor bg-gradient-to-br from-bgGradientCardFrom to-bgGradientCardTo p-8">
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
