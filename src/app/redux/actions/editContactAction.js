import ActionTypes from '../ActionTypes/ActionTypes';

export default function editContactAction(contact) {
  return {
    type: ActionTypes.EDIT_CONTACT,
    payload: contact,
  }
}
