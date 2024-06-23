import { combineReducers } from "@reduxjs/toolkit"
import translate from "./translate"
import models from "./models"

const reducer = combineReducers({
  translate,
  models
})

export default reducer
