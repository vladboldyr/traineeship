import moment from 'moment';

export const recordEndTime = (state=moment().toISOString(), action) => {
  switch (action.type) {
      case 'ADD_ENDTIME':
        return action.endTime
    default:
      return state
  }
}
