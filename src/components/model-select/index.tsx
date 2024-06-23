import {ChangeEvent, FC} from "react"

const SelectModel: FC<SelectModelProps> = ({
  models,
  selectModel,
  selectedModel
}) => {
  const handleModelSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    selectModel(e.target.value)
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg p-4">
      <div className="mb-4 text-xl">Settings</div>
      <div className="mb-4">
        <label className="mb-2 block text-sm">Model Selected</label>
        <select
          className="bg-gray-700 w-full rounded p-2"
          onChange={handleModelSelected}
          value={selectedModel?.id || ""}
        >
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
      {selectedModel && (
        <div className="border-gray-700 border-t py-4">
          <div className="mb-4">
            <div className="text-sm">name: {selectedModel.name}</div>
            <div className="text-sm">variant: {selectedModel.variant}</div>
            <div className="text-sm">
              quantization: {selectedModel.quantization}
            </div>
            <div className="text-sm">
              is downloaded: {selectedModel.isDownloaded ? "true" : "false"}
            </div>
            <div className="text-sm">disk size: {selectedModel.diskSize}</div>
            <div className="text-sm">
              description: {selectedModel.description}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 mt-4 rounded px-4 py-2">
            See model details
          </button>
        </div>
      )}
    </div>
  )
}

export default SelectModel
