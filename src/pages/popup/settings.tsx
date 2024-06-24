import { env,pipeline  } from '@xenova/transformers';
import {FC, useEffect} from "react"
import ModelSelect from "@/components/model-select"
import {useAppDispatch, useAppSelector} from "@/state/hooks"
import {_models, _selectedModel} from "@/state/selectors/models"
import {downloadModel, selectModel} from "@/state/slices/models"
import {Model} from "@/types/globals.d"


class PipelineSingleton {

  static task = 'text-classification';
  static model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, { progress_callback });
    }

    return this.instance;
  }
}

// Create generic classify function, which will be reused for the different types of events.
const classify = async (text) => {
  // Get the pipeline instance. This will load and build the model when run for the first time.
  let model = await PipelineSingleton.getInstance((data) => {
    // You can track the progress of the pipeline creation here.
    // e.g., you can send `data` back to the UI to indicate a progress bar
    // console.log('progress', data)
  });

  // Actually run the model on the input text
  return await model(text)
};



const Settings: FC = () => {
  const dispatch = useAppDispatch()

  const models = useAppSelector(_models)
  const selectedModel = useAppSelector(_selectedModel)

  const handleDownloadModel = () => dispatch(downloadModel())
  const handleSelectModel = (model: Model) => dispatch(selectModel(model))

  useEffect(() => {
    (async() => {
      env.backends.onnx.wasm.numThreads = 1
      // @ts-ignore
      env.allowLocalModels = false
      env.backends.onnx.wasm.wasmPaths = './';
      console.log(pipeline)
      const result = await classify("toy tite");
      console.log(result)
    })()
  }, [])

  return (
    <div className="w-96">
      <ModelSelect
        models={models}
        selectedModel={selectedModel}
        selectModel={handleSelectModel}
        downloadModel={handleDownloadModel}
      />
    </div>
  )
}

export default Settings
