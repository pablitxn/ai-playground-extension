import {all, fork} from "redux-saga/effects"
import modelsSaga from "./models"
import translateSaga from "./translate"

function* rootSaga() {
  yield all([fork(translateSaga), fork(modelsSaga)])
}

export default rootSaga
