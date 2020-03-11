import React from 'react';
import styles from './CreateAccount.module.sass';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import arrow from '../../assets/img/arrow-left.png';
import {Link} from 'react-router-dom';

const CreateAccount = () => (
    
  <div className={styles.container}>
  
   <Link to='/' className={styles.arrow}><img  src={arrow} alt='arrow'/></Link>
    
    <div className={styles.logiForm}>
   
        <h1 className={styles.h1}>Create an Account</h1>
        <Formik 
            initialValues={{
                hwo: '',
                fullName:'', 
                email: '', 
                parentEmail: '',
                password: '', 
                date: '',
                radio: false,
                
                 }}
                 
            validate={values => {
                console.log(values)
                const errors = {};
                let regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                let regPas = /^[\S]{4,8}/mg
                
                if(!values.email ) {
                    errors.email = 'Required';
                }else if(!regEmail.test(values.email)) {
                    errors.email = 'Invalid email address';
                }else if(!values.password) {
                    errors.password = 'Required';
                }else if(!regPas.test(values.password)) {
                    errors.password = 'Invalid password';
                }else if(!values.parentEmail ) {
                    errors.parentEmail = 'Required';
                }else if(!regEmail.test(values.parentEmail)) {
                    errors.parentEmail = 'Invalid email address';
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
                
            }) => (
                <Form className={styles.formStyle}>
                    <div>
                        <label htmlFor="hwo">I AM A</label>
                        <Field className={styles.inputStyle} as="select" name="hwo">
                            <option value="Student athlete">Student athlete</option>
                            <option value="Coach">Coach</option>
                            <option value="Parent">Parent</option>
                        </Field>
                    </div>
                    <label htmlFor="fullName">FULL NAME</label>
                    <Field className={styles.inputStyle} type="text" name="fullName" />
                    <ErrorMessage className={styles.error} name="fullName" component="div" />

                    <label htmlFor="email">EMAIL ADRESS</label>
                    <Field className={styles.inputStyle} type="email" name="email" />
                    <ErrorMessage className={styles.error} name="email" component="div" />

                    <label htmlFor="birthday">BIRTHDAY</label>
                    <Field className={styles.inputStyle} type="date" name="date" />
                    <ErrorMessage className={styles.error} name="date" component="div" />

                    <label htmlFor="parentEmail">PARENT EMAIL ADRESS</label>
                    <Field className={styles.inputStyle} type="email" name="parentEmail" />
                    <ErrorMessage className={styles.error} name="parentEmail" component="div" />

                    <label htmlFor="password">PASSWORD</label>
                    <Field className={styles.inputStyle} type="password" name="password" />
                    <ErrorMessage className={styles.error} name="password" component="div" />


                    <div className={styles.radio}>
                        <p className={styles.agree}>I agree to the Terms of Service</p>
                    </div>
                    <button className={styles.loginButton} type="submit" disabled={isSubmitting}>
                    CREATE ACCOUNT
                    </button>
                

                </Form>
            )}
        </Formik>
        
    </div>

    
  </div>
);

export default CreateAccount;