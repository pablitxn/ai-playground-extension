import { ExtensionServiceWorkerMLCEngineHandler } from "@mlc-ai/web-llm"

let handler: ExtensionServiceWorkerMLCEngineHandler

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === "web_llm_service_worker")
  if (handler === undefined) {
    handler = new ExtensionServiceWorkerMLCEngineHandler(port)
  } else {
    handler.setPort(port)
  }
  port.onMessage.addListener(handler.onmessage.bind(handler))
})
