export const recordLocalPhoneClient = (state="", action) => {
  switch (action.type) {
      case 'ADD_PHONECLIENT':
        return action.phoneClient
    default:
      return state
  }
}
