export const recordLocalNote = (state="", action) => {
  switch (action.type) {
      case 'ADD_NOTE':
        return action.note
    default:
      return state
  }
}
