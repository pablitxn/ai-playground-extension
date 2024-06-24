import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {LOCAL_MODELS} from "@/state/constants/models"
import {Model} from "@/types/globals.d"

type DiskUsageItem = {
  model: Model
  used: number
  createdAt: Date
}

type LangfuseConfig = {
  id: string
  some_value: string
}

interface ModelsState {
  models: Model[]
  remoteModels: Model[]
  localModels: Model[]
  selectedModel: Model | null
  modelToDownload: Model | null
  downloadProgress: number | null
  apiKeys: {
    openai: string
    anthropic: string
    langfuse: string
  }
  diskUsage: DiskUsageItem[] | null
  langfuseConfigs: LangfuseConfig | null
  loading: {
    downloadModel: boolean
    getLocalModels: boolean
    deleteLocalModel: boolean
    getDiskUsage: boolean
  }
  error: {
    downloadModel: boolean
    getLocalModels: boolean
    deleteLocalModel: boolean
    getDiskUsage: boolean
  }
}

const initialState: ModelsState = {
  models: LOCAL_MODELS,
  remoteModels: [],
  localModels: [],
  selectedModel: null,
  modelToDownload: null,
  downloadProgress: null,
  apiKeys: {
    openai: "",
    anthropic: "",
    langfuse: ""
  },
  diskUsage: null,
  langfuseConfigs: null,
  loading: {
    downloadModel: false,
    getLocalModels: false,
    deleteLocalModel: false,
    getDiskUsage: false
  },
  error: {
    downloadModel: false,
    getLocalModels: false,
    deleteLocalModel: false,
    getDiskUsage: false
  }
}

const modelsSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    selectModel: (state, action: PayloadAction<Model>) => {
      state.selectedModel = action.payload
    },

    downloadModel: (state) => {
      // state.modelToDownload = action.payload
    },
    downloadModelStart: (state) => {
      state.loading.downloadModel = true
      state.error.downloadModel = false
    },
    downloadModelSuccess: (state, action: PayloadAction<Model>) => {
      state.loading.downloadModel = false
      state.localModels = [...state.localModels, action.payload]
    },
    downloadModelFailure: (state) => {
      state.loading.downloadModel = false
      state.error.downloadModel = true
    },

    getLocalModels: (state) => {},
    getLocalModelsStart: (state) => {},
    getLocalModelsSuccess: (state, action: PayloadAction<Model[]>) => {},
    getLocalModelsFailure: (state) => {},

    deleteLocalModel: (state, action: PayloadAction<string>) => {},
    deleteLocalModelStart: (state) => {},
    deleteLocalModelSuccess: (state, action: PayloadAction<string>) => {},
    deleteLocalModelFailure: (state) => {},

    getDiskUsage: (state) => {},
    getDiskUsageStart: (state) => {},
    getDiskUsageSuccess: (state, action: PayloadAction<string>) => {},
    getDiskUsageFailure: (state) => {},

    addApiKeyOpenAI: (state, action: PayloadAction<string>) => {},
    addApiKeyOpenAIStart: (state) => {},
    addApiKeyOpenAISuccess: (state, action: PayloadAction<string>) => {},
    addApiKeyOpenAIFailure: (state) => {},

    deleteApiKeyOpenAI: (state) => {},
    deleteApiKeyOpenAIStart: (state) => {},
    deleteApiKeyOpenAISuccess: (state) => {},
    deleteApiKeyOpenAIFailure: (state) => {},

    addApiKeyAnthropic: (state, action: PayloadAction<string>) => {},
    addApiKeyAnthropicStart: (state) => {},
    addApiKeyAnthropicSuccess: (state, action: PayloadAction<string>) => {},
    addApiKeyAnthropicFailure: (state) => {},

    deleteApiKeyAnthropic: (state) => {},
    deleteApiKeyAnthropicStart: (state) => {},
    deleteApiKeyAnthropicSuccess: (state) => {},
    deleteApiKeyAnthropicFailure: (state) => {},

    getApiKeyLangfuse: (state) => {},
    getApiKeyLangfuseStart: (state) => {},
    getApiKeyLangfuseSuccess: (state, action: PayloadAction<string>) => {},
    getApiKeyLangfuseFailure: (state) => {},

    addApiKeyLangfuse: (state, action: PayloadAction<string>) => {},
    addApiKeyLangfuseStart: (state) => {},
    addApiKeyLangfuseSuccess: (state, action: PayloadAction<string>) => {},
    addApiKeyLangfuseFailure: (state) => {},

    addLangfuseConfigs: (state, action: PayloadAction<LangfuseConfig>) => {},
    addLangfuseConfigsStart: (state) => {},
    addLangfuseConfigsSuccess: (
      state,
      action: PayloadAction<LangfuseConfig>
    ) => {},
    addLangfuseConfigsFailure: (state) => {}
  }
})

const modelsReducer = modelsSlice.reducer

export const {
  selectModel,
  //
  downloadModel,
  downloadModelStart,
  downloadModelSuccess,
  downloadModelFailure,
  //
  getLocalModels,
  getLocalModelsStart,
  getLocalModelsSuccess,
  getLocalModelsFailure,
  //
  deleteLocalModel,
  deleteLocalModelStart,
  deleteLocalModelSuccess,
  deleteLocalModelFailure,
  //
  getDiskUsage,
  getDiskUsageStart,
  getDiskUsageSuccess,
  getDiskUsageFailure,
  //
  addApiKeyOpenAI,
  addApiKeyOpenAIStart,
  addApiKeyOpenAISuccess,
  addApiKeyOpenAIFailure,
  //
  deleteApiKeyOpenAI,
  deleteApiKeyOpenAIStart,
  deleteApiKeyOpenAISuccess,
  deleteApiKeyOpenAIFailure,
  //
  addApiKeyAnthropic,
  addApiKeyAnthropicStart,
  addApiKeyAnthropicSuccess,
  addApiKeyAnthropicFailure,
  //
  deleteApiKeyAnthropic,
  deleteApiKeyAnthropicStart,
  deleteApiKeyAnthropicSuccess,
  deleteApiKeyAnthropicFailure,
  //
  getApiKeyLangfuse,
  getApiKeyLangfuseStart,
  getApiKeyLangfuseSuccess,
  getApiKeyLangfuseFailure,
  //
  addApiKeyLangfuse,
  addApiKeyLangfuseStart,
  addApiKeyLangfuseSuccess,
  addApiKeyLangfuseFailure,
  //
  addLangfuseConfigs,
  addLangfuseConfigsStart,
  addLangfuseConfigsSuccess,
  addLangfuseConfigsFailure
} = modelsSlice.actions

export default modelsReducer
