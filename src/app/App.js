import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadInitialContactsAction from './redux/actions/loadInitialContactsAction';
import './App.css';
import ContactsList from './components/ContactsList/ContactsList';
import AppHeader from './components/AppHeader/AppHeader';



class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.loadInitialContactsAction();
  }

  render() {
    return (
      <div className="App">
        <AppHeader />         
        <ContactsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { contactsReducer } = state;
  return {
    contacts: contactsReducer.contacts
  }
};

export default connect(mapStateToProps, {loadInitialContactsAction})(App);
