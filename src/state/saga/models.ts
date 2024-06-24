import {PayloadAction} from "@reduxjs/toolkit"
import {all, call, fork, put, take, takeLatest} from "redux-saga/effects"
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

// export function* handleDownloadModel() {
//   yield put(downloadModelStart())
//   try {
//     const modelSelected = ""
//     const callToSW = async () => {
//       await chrome.runtime.sendMessage({
//         action: "DOWNLOAD_MODEL"
//       })
//     }
//
//     yield call(callToSW)
//
//     const algo: any = {}
//     yield put(downloadModelSuccess(algo))
//   } catch (e) {
//     yield put(downloadModelFailure())
//   }
// }
//
// export function* handleGetLocalModels() {
//   yield put(getLocalModelsStart())
//   try {
//     const models: any = ""
//     yield put(getLocalModelsSuccess(models))
//   } catch (e) {
//     yield put(getLocalModelsFailure())
//   }
// }
//
// export function* handleDeleteLocalModel(action: PayloadAction<string>) {
//   yield put(deleteLocalModelStart())
//   try {
//     yield call(deleteLocalModel, action.payload)
//     yield put(deleteLocalModelSuccess(action.payload))
//   } catch (e) {
//     yield put(deleteLocalModelFailure())
//   }
// }
//
// export function* handleGetDiskUsage() {
//   yield put(getDiskUsageStart())
//   try {
//     const diskUsage: any = ""
//     yield put(getDiskUsageSuccess(diskUsage))
//   } catch (e) {
//     yield put(getDiskUsageFailure())
//   }
// }

export default function* translateSaga() {
  // yield all([takeLatest(downloadModel.type, handleDownloadModel)])
  // yield all([takeLatest(getLocalModels.type, handleGetLocalModels)])
  // yield all([takeLatest(deleteLocalModel.type, handleDeleteLocalModel)])
  // yield all([takeLatest(getDiskUsage.type, handleGetDiskUsage)])
}
