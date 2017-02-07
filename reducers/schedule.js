import {Schedule} from '../components/work-schedule/schedule'

const initialState = {
  current: new Schedule()
}

export function schedule(state = initialState, action) {
  switch (action.type) {
    case 'SET_SCHEDULE' : {
      return {
        current: action.schedule
      }
    }
    default : {
      return state
    }
  }
}
