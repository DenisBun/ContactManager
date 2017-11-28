import React from 'react';
import styles from './AppHeader.css';
import { Link } from 'react-router';


const AppHeader = (props) => 
(
  <div className={styles.primaryHeader}>
    <Link to="/"><div className={styles.title}>Contact Manager</div></Link>
  </div>
);
    
export default AppHeader;

