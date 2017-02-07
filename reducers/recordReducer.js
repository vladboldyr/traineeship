export const recordReducer = (state={}, action) => {
  switch (action.type) {
      case 'LOAD_RECORDS_PENDING':
        return {
          isLoadingRecords: true,
        }
      case 'UPDATE_RECORDS_DONE':
        return {
          isLoadingRecords:false,
          dataRecords:action.recordsFullMassiv
        }
    default:
      return state
  }
}
