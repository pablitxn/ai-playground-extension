// import {RootState} from "@/state/store"

export const _models = (state: any) => state.models.models
export const _localModels = (state: any) => state.models.localModels

export const _selectedModel = (state: any) => state.models.selectedModel

export const _modelToDownload = (state: any) =>
  state.models.modelToDownload

export const _loading = (state: any) => state.models.loading
export const _error = (state: any) => state.models.error
