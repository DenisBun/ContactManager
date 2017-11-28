import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './ContactForm.css';
import addContactAction from '../../redux/actions/addContactAction';
import editContactAction from '../../redux/actions/editContactAction';
import AppHeader from '../AppHeader/AppHeader';

class ContactForm extends Component {
  constructor (props) {
    super(props);
    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  addContact(e) {    
    e.preventDefault();    
    let lastId = this.props.contacts.length > 0 ? this.props.contacts[this.props.contacts.length - 1].id : 0;
    const newContact = {
      id: lastId += 1,
      imgURL: this.imgURLInput.value,
      name: this.nameInput.value,
      phoneNumber: this.phoneInput.value,
    }
    this.props.addContactAction(newContact);   
  }

  editContact(e) {
    e.preventDefault();    
    const editablecontact = {
      id: this.props.location.state.id,
      imgURL: this.imgURLInput.value,
      name: this.nameInput.value,
      phoneNumber: this.phoneInput.value,
    }
    this.props.editContactAction(editablecontact);
    console.log(this.props.location.state);
  }

  render() {    
    return (
      <div>
        <AppHeader />          
        <form className={styles.contactForm} onSubmit={this.props.location.state ? this.editContact : this.addContact}>
          <ul>
            <li>
              <input type="text" name="field1" 
                ref={(input) => {this.nameInput = input}}
                defaultValue={this.props.location.state ? this.props.location.state.name : ''} 
                className={`${styles.fieldStyle} ${styles.fieldSplit} ${styles.alignLeft}`} 
                placeholder="Name" />
              <input type="tel" name="field2"  
                ref={(input) => {this.phoneInput = input}}
                defaultValue={this.props.location.state ? this.props.location.state.phoneNumber : ''} 
                className={`${styles.fieldStyle} ${styles.fieldSplit} ${styles.alignRight}`} 
                placeholder="Phone" />
            </li>        
            <li>
              <input type="text" name="field3" 
                ref={(input) => {this.imgURLInput = input}}
                defaultValue={this.props.location.state ? this.props.location.state.imgURL : ''}
                className={`${styles.fieldStyle} ${styles.fieldFull}`} 
                placeholder="Image URL" />
           </li>
            <li>
              <input type="submit" value={this.props.location.state ? 'Edit contact' : 'Add new contact'} />
              <Link to="/"><input type="button" className={styles.alignRight}value='Home' /></Link>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { contactsReducer } = state;
  return {
    contacts: contactsReducer.contacts,
  }
};

export default connect(mapStateToProps,{addContactAction, editContactAction})(ContactForm);
