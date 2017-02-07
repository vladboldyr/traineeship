import {serviceLocalName} from './serviceLocalName';
import {serviceLocalPrice} from './serviceLocalPrice';
import {serviceEstimatedTime} from './serviceEstimatedTime';
import {serviceServicesID} from './serviceServicesID';

export const service = (state={}, action) => {
  return {
    name: serviceLocalName(state.name, action),
    price:serviceLocalPrice(state.price,action),
    estimatedTime:serviceEstimatedTime(state.estimatedTime,action),
    servicesID:serviceServicesID(state.servicesID,action)
  };
}
