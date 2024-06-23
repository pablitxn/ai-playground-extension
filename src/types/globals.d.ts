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
