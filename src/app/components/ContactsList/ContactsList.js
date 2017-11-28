import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import { Link } from 'react-router';
import searchContactAction from '../../redux/actions/searchContactAction';
import { connect } from 'react-redux';
import styles from './ContactList.css';


class ContactsList extends Component {
  constructor(props){
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.props.searchContactAction(e.target.value);
  }

  render () {   
    const filteredContacts = this.props.contacts.filter(contact => contact.name.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1)
    return (      
      <div>
        <h1>Contacts List 
          <Link to="/addContact"><i className={`fa fa-plus ${styles.greenBtn}`} aria-hidden="true"></i></Link>
        </h1> 
        <input type="text" 
          className={`${styles.fieldStyle}`}
          placeholder="Search contact"
          onChange={this.updateSearch}
        />      
        <div className={styles.wrapper}>        
          {filteredContacts.map(contact => {
            return <Contact contact={contact} key={contact.id}/>     
          })}
        </div>
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  const { contactsReducer } = state;
  return {
    searchValue: contactsReducer.searchValue,
    contacts: contactsReducer.contacts,  
  }
};

export default connect(mapStateToProps, {searchContactAction})(ContactsList);