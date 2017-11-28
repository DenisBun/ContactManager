import ActionTypes from '../ActionTypes/ActionTypes';

export default function addContactAction(contactId) {
  return {
    type: ActionTypes.DELETE_CONTACT,
    payload: contactId,
  }
}
