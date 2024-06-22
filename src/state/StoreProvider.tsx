"use client"
import React, { useRef } from "react"
import { Provider } from "react-redux"
import store from "./store"

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null)
  if (!storeRef.current) {
    storeRef.current = store
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
