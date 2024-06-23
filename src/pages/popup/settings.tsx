import {FC} from "react"
import ModelSelect from "@/components/model-select"
import {useAppDispatch, useAppSelector} from "@/state/hooks"
import {_models, _selectedModel} from "@/state/selectors/models"
import {downloadModel, selectModel} from "@/state/slices/models"
import {Model} from "@/types/globals.d"

const Settings: FC = () => {
  const dispatch = useAppDispatch()

  const models = useAppSelector(_models)
  const selectedModel = useAppSelector(_selectedModel)

  const handleDownloadModel = (model: Model) => dispatch(downloadModel(model))
  const handleSelectModel = (model: Model) => dispatch(selectModel(model))

  return (
    <div className="w-96">
      <ModelSelect
        models={models}
        selectedModel={selectedModel}
        selectModel={handleSelectModel}
      />
    </div>
  )
}

export default Settings
