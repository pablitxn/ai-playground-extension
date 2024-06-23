export enum Languages {
  en = "English",
  es = "Spanish",
  fr = "French",
  de = "German",
  it = "Italian",
  ko = "Korean",
  ru = "Russian"
}

export enum Role {
  USER = "user",
  ASSISTANT = "assistant"
}

export enum Type {
  TEXT = "text",
  ACTIVITY = "activity"
}

export enum SubType {
  MESSAGE = "message"
}

export enum LlmModel {
  Llama = "Llama-3-8B-Instruct",
  Hermes = "Hermes-2-Pro-Llama-3-8B",
  Qwen = "Qwen2-7B-Instruct",
  Mixtral = "Mixtral-8x7B-Instruct-v0.1"
}
