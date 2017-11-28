import actionTypes from '../ActionTypes/ActionTypes';

const initialState = {
  contacts: [
    {
      id: 1,
      imgURL: 'https://bikeandbrain.files.wordpress.com/2015/05/face.jpg?w=415&h=415',
      name: 'John',
      phoneNumber: '+375445955544'
    },
    {
      id: 2,
      imgURL: 'https://pbs.twimg.com/profile_images/534863086276988928/bX3juDCC_400x400.jpeg',
      name: 'Bruce Lee',
      phoneNumber: '+375555955544'
    },
    {
      id: 3,
      imgURL: ' https://www.w3schools.com/howto/img_avatar2.png',
      name: 'Lisa One',
      phoneNumber: '+375555955544'
    }
   
  ],
  searchValue: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.LOAD_INITIAL_CONTACTS: {
      return {
        contacts: state.contacts,
        searchValue: state.searchValue
      };
    }
    case actionTypes.ADD_CONTACT: {
     return {
        contacts: [...state.contacts, action.payload],
        searchValue: state.searchValue
      };
    }
    case actionTypes.DELETE_CONTACT: {
      return {
        contacts: state.contacts.filter(contact => action.payload !== contact.id),
        searchValue: state.searchValue,
      };
    }
    case actionTypes.SEARCH_CONTACT: {      
      return {
        contacts: state.contacts,
        searchValue: action.payload,
      }
    }
    case actionTypes.EDIT_CONTACT: {
      return {
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            const currContact = contact;
            currContact.name = action.payload.name;
            currContact.phoneNumber = action.payload.phoneNumber;
            currContact.imgURL = action.payload.imgURL;
          }
          return contact;
        }),
        searchValue: state.searchValue,
      };
    }
    default: { return state ;}
  }

}

export default contactsReducer;
