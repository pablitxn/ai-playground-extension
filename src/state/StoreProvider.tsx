"use client"
import React, { FC, ReactNode, useRef } from "react"
import { Provider } from "react-redux"
import store from "./store"

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef(null)
  if (!storeRef.current) {
    // @ts-ignore
    storeRef.current = store
  }
  // @ts-ignore
  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
