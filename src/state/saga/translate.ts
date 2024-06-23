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
} from "@/state/slices/translate"
import ConversationService from "@/services/conversation"
import { Role, Type, SubType } from "@/types/enums"

export function* handleAgentMessage() {
  // const conversationId = yield select(selectConversationId)
}

export function* handleTranslate(action: PayloadAction<string>) {
  yield put(translateStart())
  try {
    const conversationService = new ConversationService()
    // yield call(conversationService.translate, action.payload)
    // yield fork(handleAgentMessage)
    const message = {
      id: Math.random().toString(36).substring(7), // todo: improve
      role: Role.ASSISTANT,
      content: [
        {
          id: Math.random().toString(36).substring(7), // todo: improve
          type: Type.TEXT,
          subtype: SubType.MESSAGE,
          payload: {
            content: "Hola!"
          }
        }
      ]
    }
    yield put(translateSuccess(message))
  } catch (e) {
    yield put(translateFailure())
  }
}

export default function* translateSaga() {
  yield all([takeLatest(translate.type, handleTranslate)])
}
