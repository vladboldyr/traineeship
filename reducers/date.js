import moment from 'moment'

const initialState = {
  current: moment()
};

export const date = function(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE' : {
      return {
        current: action.date
      }
    }
    default : {
      return state
    }
  }
}
