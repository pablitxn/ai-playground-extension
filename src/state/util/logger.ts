const logger =
  (store: any) => (next: any) => (action: any) => {
    console.group(action.type)
    console.log("PrevState", store.getState())
    console.log("Action", action)
    const newState = next(action)
    console.log("NewState", store.getState())
    console.groupEnd()
    return newState
  }

export default logger;
