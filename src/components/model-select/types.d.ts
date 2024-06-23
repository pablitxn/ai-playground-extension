interface SelectModelProps {
  models: Model[]
  selectedModel: Model
  selectModel: (modelId: string) => void
}
