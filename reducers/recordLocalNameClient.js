export const recordLocalNameClient = (state="", action) => {
  switch (action.type) {
      case 'ADD_NAMECLIENT':
        return action.nameClient
    default:
      return state
  }
}
