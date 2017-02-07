export const recordServicesId = (state=[], action) => {
  switch (action.type) {
      case 'ADD_SERVICESID':
        return action.servicesId
    default:
      return state
  }
}
