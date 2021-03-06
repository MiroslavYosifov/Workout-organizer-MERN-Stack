import React from 'react';
import { withRouter } from 'react-router-dom';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideBar from '../Navigation/Sidebar/Sidebar';
import Modal from '../UI/Modal/Modal';
import AuthLoginForm from '../Auth/Forms/AuthLoginForm/AuthLoginForm';

const layout = (props) => {
    return (
        <Auxiliary>
            <div className={classes.Layout}>
                <Toolbar history={props.history} isLogged={props.isLogged}/>
                <main  className={classes.Content}>
                    {props.children}
                </main>
                <SideBar isLogged={props.isLogged}/>
            </div>
        </Auxiliary>)
}
  
export default layout;