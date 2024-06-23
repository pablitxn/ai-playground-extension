import { ReactNode } from "react"

type Content = {
  id: string
  type: Type
  subtype: SubType
  isError?: boolean
  error?: string | null
  payload: {
    [key: string]: string
  }
}

type Message = {
  id: string
  role: Role
  content: Content[]
}

type IncommingMessage = {
  id: string
  role: Role
}

type IncommingContent = {
  id: string
  type: Type
  subtype: SubType
  isError: boolean
  error: string | null
  content: Content[]
}

type SelectedLanguage = {
  from: Languages
  to: Languages
}

type ModelSourceType = "local" | "api"

interface Model {
  id: string
  name: string
  description: string
  releaseDate: Date
  quantization: string
  url?: string
  size: string
  diskSize: string
  sourceType: ModelSourceType
  apiEndpoint?: string
  localPath?: string
  createdAt: Date
  updatedAt: Date
  tags?: string[]
  metadata?: Record<string, any>
}

////////////////////////////////////////////////////////
// Interfaces
// for global components
////////////////////////////////////////////////////////

interface ProvidersProps {
  children: ReactNode
}

////////////////////////////////////////////////////////
// Enums
// this is a copy of the enums.ts file
////////////////////////////////////////////////////////

enum Languages {
  en = "English",
  es = "Spanish",
  fr = "French",
  de = "German",
  it = "Italian",
  ko = "Korean",
  ru = "Russian"
}

enum Role {
  USER = "user",
  ASSISTANT = "assistant"
}

enum Type {
  TEXT = "text",
  ACTIVITY = "activity"
}

enum LlmModel {
  Llama = "Llama-3-8B-Instruct",
  Hermes = "Hermes-2-Pro-Llama-3-8B",
  Qwen = "Qwen2-7B-Instruct",
  Mixtral = "Mixtral-8x7B-Instruct-v0.1",
  Phi3Mini = "Phi-3-mini-128k-instruct"
}
