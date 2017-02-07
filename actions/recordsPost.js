import {Fetch} from 'react-native';
const updateRecordsDone = (json) => {
  return {
    type: 'UPDATE_RECORDS_DONE',
    recordsFullMassiv: json.recordsMassiv,
  }
}
const createRecordError = (json) => {
  return {
    type:'ERROR_CREATE_RECORDS',
  }
}
const updateRecordError = (json) => {
  return {
    type:'ERROR_UPDATE_RECORDS',
  }
}
export const updateRecords = () => {

    return (dispatch, getState) => {
        dispatch({
            type: 'LOAD_RECORDS_PENDING'
        });
        return  fetch(getState().server,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'messageMapId': 'get-records',
                'sessionID': getState().sessionId
            })
        })
        .then(response => response.json())
        .then(json => {

            if(json.status.code == 0)
                dispatch(updateRecordsDone(json));
            else
                dispatch(updateRecordError(json));
        })
    }
}

export const addRecord = () => {
    return (dispatch, getState) => {
        return  fetch(getState().server,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'messageMapId': 'create-record',
                'sessionID': getState().sessionId,
                'record': {
                      "clientID": "76d8291e-4724-46f3-8a73-2cbeb8274dc9",
                      "note": getState().record.note,
                      "services":getState().record.servicesId,
                      "startTime": getState().record.startTime,
                      "endTime": getState().record.endTime
                }
            })
        })
            .then(response => response.json())
            .then(json => {
                if(json.status.code == 0)
                    dispatch(updateRecords());
                else
                    dispatch(createRecordError(json));
            })
    }
}
