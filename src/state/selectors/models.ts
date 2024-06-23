import type {RootState} from "@/state"

export const _models = (state: RootState) => state.models.models
export const _localModels = (state: RootState) => state.models.localModels

export const _selectedModel = (state: RootState) => state.models.selectedModel

export const _modelToDownload = (state: RootState) =>
  state.models.modelToDownload

export const _loading = (state: RootState) => state.models.loading
export const _error = (state: RootState) => state.models.error
