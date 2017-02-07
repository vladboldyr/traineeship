import {recordLocalNote} from './recordLocalNote';
import {recordEndTime} from './recordLocalEndTime';
import {recordStartTime} from './recordLocalStartTime';
import {recordServicesId} from './recordLocalServicesId';
import {recordLocalClient} from './recordLocalClient';

export const record = (state={}, action) => {
  return {
    note: recordLocalNote(state.note, action),
    startTime:recordStartTime(state.startTime,action),
    endTime:recordEndTime(state.endTime,action),
    servicesId:recordServicesId(state.servicesId,action),
    client:recordLocalClient(state.client,action)
  };
}
