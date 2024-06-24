// import { env } from "@xenova/transformers"
import {FC, useEffect} from "react"
import TranslateComponent from "@/components/translate"
import {useAppDispatch, useAppSelector} from "@/state/hooks"
import {
  selectTranslations,
  selectSelectedLanguage,
  languagesSelector
} from "@/state/selectors/translate"
import {translate, selectLanguage} from "@/state/slices/translate"

const Translate: FC = () => {
  const translations = useAppSelector(selectTranslations)
  const selectedLanguage = useAppSelector(selectSelectedLanguage)
  const languages = useAppSelector(languagesSelector)

  const dispatch = useAppDispatch()
  const handleTranslate = (payload: any) => dispatch(translate(payload))

  const handleSelectLanguage = (payload: any) =>
    dispatch(selectLanguage(payload))

  // env.allowLocalModels = false //this is a must and if it's true by default for the first time, wrong data is cached to keep failing after this line is added, until the cache is cleared in browser!
  // env.backends.onnx.wasm.numThreads = 1
  // env.backends.onnx.wasm.wasmPaths = "onnxjs/optimized-wasm/onnxruntime-web.wasm";
  // env.allowRemoteModels = false;
  // this.embedder = await pipeline("embeddings", EMBEDDING_MODEL_NAME);
  // env.backend = "onnxjs";

  // useEffect(() => {
  //   env.backends.onnx.wasm.numThreads = 1
  //   env.allowLocalModels = true
  //   console.log(env)
  // }, [])

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
