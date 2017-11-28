import React from 'react';
import styles from './Contact.css';
import { connect } from 'react-redux';
import deleteContactAction from '../../redux/actions/deleteContactAction';
import editContactAction from '../../redux/actions/editContactAction';
import { Link } from 'react-router'

const Contact = (props) => 
(
  <div>
    <div className={styles.contact}>
      <img src={props.contact.imgURL} />
      <div className={styles.contactInfo}>  
        <p>{props.contact.name}</p>
        <p>{props.contact.phoneNumber}</p>
        <div>
          <Link to={{pathname: "/editContact", state: props.contact}}>
            <i className="fa fa-pencil-square" aria-hidden="true"></i>
          </Link>
        </div> 
        <div onClick={ () => {props.deleteContactAction(props.contact.id)} }>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>   
    </div>  
  </div>
);
    
export default connect(null, {deleteContactAction})(Contact);

