export const serviceLocalPrice = (state="", action) => {
  switch (action.type) {
      case 'ADD_PRICE':
        return action.price
    default:
      return state
  }
}
