import React, { FC, useState } from "react"
import Translate from "../components/translate"
import { translate } from "../state/slices/translate"
import {
  useAppDispatch,
  useAppSelector
} from "../state/hooks"
import { selectTranslations } from "../state/selectors/translate"

const Popup: FC = () => {
  const _lng = [
    "en",
    "es",
    "fr",
    "de",
    "it",
    "ja",
    "ko",
    "pt",
    "ru",
    "zh"
  ]
  const [languageSelected, setLanguageSelected] = useState({
    from: _lng[0],
    to: _lng[1]
  })

  const dispatch = useAppDispatch()
  const translations = useAppSelector(selectTranslations)

  const handleTranslate = (payload: any) =>
    dispatch(translate(payload))

  const handleSelectLanguage = (payload: any) =>
    setLanguageSelected(payload)

  return (
    <div className="w-96">
      <Translate
        languages={_lng}
        languageSelected={languageSelected}
        selectLanguage={handleSelectLanguage}
        translation={translations[0]}
        translate={handleTranslate}
      />
    </div>
  )
}

export default Popup
