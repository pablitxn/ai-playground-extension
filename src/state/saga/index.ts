import { all, fork } from "redux-saga/effects"
import translateSaga from "./translate"

function* rootSaga() {
  yield all([fork(translateSaga)])
}

export default rootSaga
