import ActionTypes from '../ActionTypes/ActionTypes';

export default function addContactAction(contact) {
  return {
    type: ActionTypes.ADD_CONTACT,
    payload: contact,
  }
}
