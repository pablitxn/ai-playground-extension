import React, { FC } from "react"
import TranslateComponent from "@/components/translate"
import { translate, selectLanguage } from "@/state/slices/translate"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import {
  selectTranslations,
  selectSelectedLanguage,
  languagesSelector
} from "@/state/selectors/translate"

const Translate: FC = () => {
  const translations = useAppSelector(selectTranslations)
  const selectedLanguage = useAppSelector(selectSelectedLanguage)
  const languages = useAppSelector(languagesSelector)

  const dispatch = useAppDispatch()
  const handleTranslate = (payload: any) => dispatch(translate(payload))

  const handleSelectLanguage = (payload: any) =>
    dispatch(selectLanguage(payload))

  return (
    <div className="w-96">
      <TranslateComponent
        languages={languages}
        selectedLanguage={selectedLanguage}
        selectLanguage={handleSelectLanguage}
        translation={translations[0]}
        translate={handleTranslate}
      />
    </div>
  )
}

export default Translate
