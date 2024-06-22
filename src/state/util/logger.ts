const logger = store => next => action => {
  console.group(action.type);
  console.log('PrevState', store.getState());
  console.log('Action', action);
  const newState = next(action);
  console.log('NewState', store.getState());
  console.groupEnd();
  return newState;
};

export default logger;
