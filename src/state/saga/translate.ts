// import { END, eventChannel } from "redux-saga"
import { PayloadAction } from "@reduxjs/toolkit"
import {
  all,
  call,
  fork,
  put,
  take,
  takeLatest,
  select
} from "redux-saga/effects"
// import { selectConversationId } from "../selectors/translate"
import {
  translate,
  translateStart,
  translateSuccess,
  translateFailure
} from "../slices/translate"
import ConversationService from "../../services/conversation"

export function* handleAgentMessage() {
  // const conversationId = yield select(selectConversationId)
}

type algo = any

export function* handleTranslate(
  action: PayloadAction<algo>
) {
  try {
    const translationId = yield select(
      (s) => s.translate.translationId
    )
    yield put(translateStart())
    const conversationService = new ConversationService()
    // yield call(conversationService, action.payload)
    yield put(translateSuccess({}))
    yield fork(handleAgentMessage)
  } catch (e) {
    yield put(translateFailure(e))
  }
}

export default function* translateSaga() {
  yield all([takeLatest(translate.type, handleTranslate)])
}
