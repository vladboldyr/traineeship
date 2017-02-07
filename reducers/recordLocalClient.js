import {recordLocalNameClient} from './recordLocalNameClient';
import {recordLocalPhoneClient} from './recordLocalPhoneClient';
import {recordLocalClientsID} from './recordLocalClientsID'

export const recordLocalClient = (state={}, action) => {
  return {
    name:recordLocalNameClient(state.nameClient,action),
    number:recordLocalPhoneClient(state.phoneClient,action),
    clientsID:recordLocalClientsID(state.clientsID,action)
  };
}
