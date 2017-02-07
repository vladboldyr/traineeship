export const serviceServicesID = (state="", action) => {
  switch (action.type) {
      case 'ADD_SERVICES_ID':
        return action.servicesID
    default:
      return state
  }
}
