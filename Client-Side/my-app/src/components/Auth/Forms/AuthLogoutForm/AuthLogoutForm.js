import React, { Component } from 'react';
import  classes from './AuthLoginForm.module.css';

import * as yup from 'yup';
import { useFormik, withFormik, Form, Field } from 'formik';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLogoutChecking } from '../../../../store/actions/index';

const AuthLogoutForm = () => (
    <Form className={classes.AuthLogoutForm}>
      <button>Logout</button>
    </Form>
);

const FormikAuthLogoutForm = withFormik({
  handleSubmit(values, { props, setSubmitting }) {
    const history = props.history;
    const { onLogout } = props;
    onLogout(history).then(() => setSubmitting(false))
  }
})(AuthLogoutForm);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        onLogout: (history) => dispatch(authLogoutChecking(history)),
      }
    )
  };

export default connect(null, mapDispatchToProps)(FormikAuthLogoutForm);