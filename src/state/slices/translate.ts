import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Languages, Role, Type, SubType } from "@/types/enums"

interface TranslateState {
  translations: Message[]
  translationId: string | null
  incomingTranslation: Message | null
  languages: Languages[]
  selectedLanguage: {
    from: Languages
    to: Languages
  }
  loading: {
    translate: boolean
  }
  error: {
    translate: boolean
  }
}

const initialState: TranslateState = {
  translations: [],
  translationId: null,
  incomingTranslation: null,
  languages: Object.values(Languages),
  selectedLanguage: {
    from: Languages.en,
    to: Languages.es
  },
  loading: {
    translate: false
  },
  error: {
    translate: false
  }
}

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    translate: (state, action: PayloadAction<string>) => {
      const newMessage = {
        id: Math.random().toString(36).substring(7), // todo: improve
        role: Role.USER,
        content: [
          {
            id: Math.random().toString(36).substring(7), // todo: improve
            type: Type.TEXT,
            subtype: SubType.MESSAGE,
            payload: {
              content: action.payload
            }
          }
        ]
      }
      state.translations = [...state.translations, newMessage]
    },
    translateStart: (state) => {
      state.loading.translate = true
    },
    translateSuccess: (state, action: PayloadAction<Message>) => {
      state.loading.translate = false
      state.translations = [...state.translations, action.payload]
    },
    translateFailure: (state) => {
      state.loading.translate = false
      state.error.translate = true
    },
    selectLanguage: (state, action) => {
      state.selectedLanguage = action.payload
    }
  }
})

const translateReducer = translateSlice.reducer

export const {
  translate,
  translateStart,
  translateSuccess,
  translateFailure,
  selectLanguage
} = translateSlice.actions

export default translateReducer
