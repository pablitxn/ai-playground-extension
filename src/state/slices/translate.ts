import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  translations: [],
  translationId: null,
  incomingTranslation: null,
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
    }
  }
})

const translateReducer = translateSlice.reducer

export const {
  translate,
  translateStart,
  translateSuccess,
  translateFailure
} = translateSlice.actions

export default translateReducer
