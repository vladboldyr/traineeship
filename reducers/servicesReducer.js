export const servicesReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOAD_SERVICES_PENDING':
      return {
        isLoading: true,
      }
      case 'LOAD_SERVICES_DONE':
        return {
          isLoading: false,
          data: action.servicesFullList
        }
    default:
      return state
  }
}
