import { EventChannel, eventChannel } from "redux-saga"
import { all, call, fork, put, take, takeLatest } from "redux-saga/effects"
import {
  translate,
  translateStart,
  translateSuccess,
  translateFailure
} from "@/state/slices/translate"
import { Role, Type, SubType } from "@/types/enums"

const connectToServiceWorker = (): Promise<chrome.runtime.Port> => {
  return new Promise((resolve) => {
    const port = chrome.runtime.connect({ name: "translateChannel" })
    resolve(port)
  })
}

const createServiceWorkerChannel = (
  port: chrome.runtime.Port
): EventChannel<any> => {
  return eventChannel((emit) => {
    port.onMessage.addListener((message) => {
      if (message.type === "translateResponse") {
        emit(translateSuccess(message.payload))
      }
    })
    return () => port.disconnect()
  })
}

export function* handleTranslate() {
  yield put(translateStart())
  try {
    const port: chrome.runtime.Port = yield call(connectToServiceWorker)
    const channel: EventChannel<any> = yield call(
      createServiceWorkerChannel,
      port
    )

    // Fork a saga to listen to the channel
    yield fork(function* () {
      while (true) {
        const action: string = yield take(channel)
        // yield put(action)
      }
    })

    // Example message to send to service worker
    const message = {
      id: Math.random().toString(36).substring(7), // todo: improve with uuid
      role: Role.ASSISTANT,
      content: [
        {
          id: Math.random().toString(36).substring(7), // todo: improve with uuid
          type: Type.TEXT,
          subtype: SubType.MESSAGE,
          payload: {
            content: "Hola!"
          }
        }
      ]
    }

    // Assuming a sendMessage method exists to send a message to the service worker
    port.postMessage(message)
  } catch (e) {
    yield put(translateFailure())
  }
}

export default function* translateSaga() {
  yield all([takeLatest(translate.type, handleTranslate)])
}
