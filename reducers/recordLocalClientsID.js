export const recordLocalClientsID = (state, action) => {
  switch (action.type) {
      case 'ADD_CLIENTSID':
        return action.clientsID
    default:
      return state
  }
}
