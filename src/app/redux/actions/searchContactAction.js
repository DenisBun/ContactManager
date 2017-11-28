import ActionTypes from '../ActionTypes/ActionTypes';

export default function serchContactAction(contactName) {
  return {
    type: ActionTypes.SEARCH_CONTACT,
    payload: contactName,
  }
}
