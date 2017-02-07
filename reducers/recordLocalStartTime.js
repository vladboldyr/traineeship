import moment from 'moment';

export const recordStartTime = (state=moment().toISOString(), action) => {
  switch (action.type) {
      case 'ADD_STARTTIME':
        return action.startTime
    default:
      return state
  }
}
