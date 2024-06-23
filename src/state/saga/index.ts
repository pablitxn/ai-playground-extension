import { all, fork } from "redux-saga/effects"
import translateSaga from "./translate"
import modelsSaga from "./models"

function* rootSaga() {
  yield all([fork(translateSaga), fork(modelsSaga)])
}

export default rootSaga
