import { EventChannel, eventChannel } from "redux-saga"
import { all, call, fork, put, take, takeLatest } from "redux-saga/effects"
import {
  downloadModel,
  downloadModelStart,
  downloadModelSuccess,
  downloadModelFailure,
  getLocalModels,
  getLocalModelsStart,
  getLocalModelsSuccess,
  getLocalModelsFailure,
  deleteLocalModel,
  deleteLocalModelStart,
  deleteLocalModelSuccess,
  deleteLocalModelFailure,
  getDiskUsage,
  getDiskUsageStart,
  getDiskUsageSuccess,
  getDiskUsageFailure
} from "@/state/slices/models"
import { Role, Type, SubType } from "@/types/enums"
import { PayloadAction } from "@reduxjs/toolkit"

export function* handleDownloadModel() {
  yield put(downloadModelStart())
  try {
    // const port: chrome.runtime.Port = yield call()
    // Assuming a sendMessage method exists to send a message to the service worker
    const model: any = ""
    yield put(downloadModelSuccess(model))
  } catch (e) {
    yield put(downloadModelFailure())
  }
}

export function* handleGetLocalModels() {
  yield put(getLocalModelsStart())
  try {
    const models: any = ""
    yield put(getLocalModelsSuccess(models))
  } catch (e) {
    yield put(getLocalModelsFailure())
  }
}

export function* handleDeleteLocalModel(action: PayloadAction<string>) {
  yield put(deleteLocalModelStart())
  try {
    yield call(deleteLocalModel, action.payload)
    yield put(deleteLocalModelSuccess(action.payload))
  } catch (e) {
    yield put(deleteLocalModelFailure())
  }
}

export function* handleGetDiskUsage() {
  yield put(getDiskUsageStart())
  try {
    const diskUsage: any = ""
    yield put(getDiskUsageSuccess(diskUsage))
  } catch (e) {
    yield put(getDiskUsageFailure())
  }
}

export default function* translateSaga() {
  yield all([takeLatest(downloadModel.type, handleDownloadModel)])
  yield all([takeLatest(getLocalModels.type, handleGetLocalModels)])
  yield all([takeLatest(deleteLocalModel.type, handleDeleteLocalModel)])
  yield all([takeLatest(getDiskUsage.type, handleGetDiskUsage)])
}
