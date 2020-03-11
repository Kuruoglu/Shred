import React from 'react';
import styles from './LoginPage.module.sass';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import arrow from '../../assets/img/arrow-left.png';
import {Link} from 'react-router-dom';

const LoginPage = () => (
  <div className={styles.container}>
   <Link to='/' className={styles.arrow}><img  src={arrow} alt='arrow'/></Link>
    
    <div className={styles.logiForm}>
    <div className={styles.sircle} />
    <h1 className={styles.loginText}>Login</h1>
    <Formik 
      initialValues={{ email: '', password: '' }}
      validate={values => {
        console.log(values)
        const errors = {};
        let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        let regPas = /^[\S]{4,8}/mg
        
          if(!values.email) {
            errors.email = 'Required';
          }else if(!regEmail.test(values.email)) {
            errors.email = 'Invalid email address';
          }else if(!values.password) {
            errors.password = 'Required';
          }else if(!regPas.test(values.password)) {
            errors.password = 'Invalid password';
          }
       
        return errors;
      }}
     
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        
        isSubmitting,
        isValidating
      }) => (
        <Form className={styles.formStyle} onSubmit={onSubmit}>
          <Field className={styles.inputStyle} type="email" name="email" />
          <ErrorMessage className={styles.error} name="email" component="div" />
          <Field className={styles.inputStyle} type="password" name="password" />
          <ErrorMessage className={styles.error} name="password" component="div" />
          <button className={isValidating ? styles.loginButton : styles.loginButtonActive} type="submit" disabled={isSubmitting}>
          LOGIN
          </button>
          <p className={styles.memberPass}>Forgot password?</p>
        </Form>
      )}
    </Formik>
    </div>

    
  </div>
);

export default LoginPage;