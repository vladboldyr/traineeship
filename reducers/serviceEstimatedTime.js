export const serviceEstimatedTime = (state="", action) => {
  switch (action.type) {
      case 'ADD_ESTIMATED_TIME':
        return action.estimatedTime
    default:
      return state
  }
}
