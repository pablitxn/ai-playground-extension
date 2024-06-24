// @ts-nocheck

let asd = "dsa"
// import { env, pipeline } from '@xenova/transformers';
// env.localModelPath = 'models/';
// env.allowLocalModels = false //this is a must and if it's true by default for the first time, wrong data is cached to keep failing after this line is added, until the cache is cleared in browser!
// env.backends.onnx.wasm.numThreads = 1
// env.backends.onnx.wasm.wasmPaths = "onnxjs/optimized-wasm/onnxruntime-web.wasm";
// env.allowRemoteModels = false;
// this.embedder = await pipeline("embeddings", EMBEDDING_MODEL_NAME);
// env.backend = "onnxjs";
//
// async function createOffscreen() {
//   if (await chrome.offscreen.hasDocument()) return
//   await chrome.offscreen.createDocument({
//     url: "offscreen.html",
//     /* valid reasons:
//     AUDIO_PLAYBACK,
//     BLOBS,
//     CLIPBOARD,
//     DISPLAY_MEDIA,
//     DOM_PARSER,
//     DOM_SCRAPING,
//     IFRAME_SCRIPTING,
//     TESTING,
//     USER_MEDIA,
//     WEB_RTC.
//     */
//     reasons: ["BLOBS"],
//     justification: "testing"
//   })
// }
//
// class PipelineSingleton {
//   static task = "feature-extraction" //'text-classification';
//   static model_name_or_path = "Xenova/all-MiniLM-L6-v2" //'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
//
//   static quantized = false
//   static instance = null
//   static model_buffer = null
//   static tokenizer = null
//
//   static {
//     //ES2022
//     env.allowLocalModels = false //this is a must and if it's true by default for the first time, wrong data is cached to keep failing after this line is added, until the cache is cleared in browser!
//     // Due to a bug in onnxruntime-web, we must disable multithreading for now.
//     // See https://github.com/microsoft/onnxruntime/issues/14445 for more information.
//     env.backends.onnx.wasm.numThreads = 1
//   }
//
//   static async getInstance(progress_callback = null) {
//     if (this.instance === null) {
//       this.instance = pipeline(this.task, this.model_name_or_path, {
//         quantized: this.quantized,
//         progress_callback /*more options: https://huggingface.co/docs/transformers.js/api/utils/hub#module_utils/hub..PretrainedOptions*/
//       })
//     }
//
//     return this.instance
//   }
// }
//
// // Create generic classify function, which will be reused for the different types of events.
// const classify = async (text) => {
//   console.log("background classify")
//   await createOffscreen()
//   await chrome.runtime.sendMessage({
//     target: "offscreen",
//     text: text
//   })
//
//   // Get the pipeline instance. This will load and build the model when run for the first time.
//   const model = await PipelineSingleton.getInstance((data) => {
//     // You can track the progress of the pipeline creation here.
//     // e.g., you can send `data` back to the UI to indicate a progress bar
//     // console.log('progress', data)
//   })
//
//   // Actually run the model on the input text
//   return await model(text)
// }
//
// ////////////////////// 1. Context Menus //////////////////////
// //
// // Add a listener to create the initial context menu items,
// // context menu items only need to be created at runtime.onInstalled
// chrome.runtime.onInstalled.addListener(function () {
//   // Register a context menu item that will only show up for selection text.
//   chrome.contextMenus.create({
//     id: "classify-selection",
//     title: 'Classify "%s"',
//     contexts: ["selection"]
//   })
// })
//
// // Perform inference when the user clicks a context menu
// chrome.contextMenus.onClicked.addListener(async (info, tab) => {
//   // Ignore context menu clicks that are not for classifications (or when there is no input)
//   if (info.menuItemId !== "classify-selection" || !info.selectionText) return
//
//   // Perform classification on the selected text
//   const result = await classify(info.selectionText)
//
//   // Do something with the result
//   await chrome.scripting.executeScript({
//     target: {tabId: tab.id}, // Run in the tab that the user clicked in
//     args: [result], // The arguments to pass to the function
//     function: (result) => {
//       // The function to run
//       // NOTE: This function is run in the context of the web page, meaning that `document` is available.
//       console.log("result", result)
//       console.log("document", document)
//     }
//   })
// })
//
// //////////////////////////////////////////////////////////////
// ////////////////////// 2. Message Events /////////////////////
// //
// // Listen for messages from the UI, process it, and send the result back.
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   //console.log('sender', sender)
//   if (message.target !== "background") return
//
//   if (message.action === "log") {
//     console.log("from offscreen", message.data)
//   }
//
//   if (message.action !== "classify") return // Ignore messages that are not meant for classification.
//   console.log(sender, message)
//
//   // Run model prediction asynchronously
//   ;(async function () {
//     // Perform classification
//     const result = await classify(message.text)
//
//     // Send response back to UI
//     sendResponse(result)
//   })()
//
//   // return true to indicate we will send a response asynchronously
//   // see https://stackoverflow.com/a/46628145 for more information
//   return true
// })
// //////////////////////////////////////////////////////////////
