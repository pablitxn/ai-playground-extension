import { createSlice } from "@reduxjs/toolkit"
import { Languages } from "../../constants/translate"

const initialState = {
  translations: [],
  translationId: null,
  incomingTranslation: null,
  languages: Object.keys(Languages),
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
    translate: (state, action) => {
      state.translations = [
        ...state.translations,
        {
          role: "user",
          content: [
            {
              type: "text",
              payload: {
                content: action.payload
              }
            }
          ]
        }
      ]
    },
    translateStart: (state) => {
      state.loading.translate = true
    },
    translateSuccess: (state, action) => {
      state.loading.translate = false
      state.translations = [
        ...state.translations,
        action.payload
      ]
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
