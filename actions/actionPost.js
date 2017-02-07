import {Fetch} from 'react-native';
const _loadServicesDone = (json) => {
  return {
    type: 'LOAD_SERVICES_DONE',
    servicesFullList: json.services,
  }
}


export const loadServices = () => {
 return (dispatch,getState) => {
   dispatch({
     type: 'LOAD_SERVICES_PENDING'
   });
   let query = JSON.stringify({
     'messageMapId': 'get-services',
     'sessionID': getState().sessionId,
      "page": {
        "size": 100,
        "number": 1
    }
   });
   return  fetch(getState().server,{
     method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
      body: query
   })
  .then(response => response.json())
  .then(json => {
        if(typeof json.services === "undefined"){
        //  alert(JSON.stringify(json));
        //  alert(query);
          json.services = [];
        }
        dispatch(_loadServicesDone(json))
    }
  )
 }
}
