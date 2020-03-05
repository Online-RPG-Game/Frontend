import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import StyledForm from './styles';

const initialValues = {
  username: '',
  email: '',
  password1: '',
  password2: ''
};

const url = process.env.REACT_APP_BASE_URL;

const Register = (props) => {
  const handleSubmit = (values) => {
    axios
      .post(`${url}api/registration/`, values)
      .then((res) => {
        console.log(res);
        props.history.push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledForm>
      <h1 className='title'>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form className='form'>
            <Field
              className='input'
              type='text'
              name='username'
              placeholder='Username'
            />
            <Field
              className='input'
              type='email'
              name='email'
              placeholder='Email'
            />
            <Field
              className='input'
              type='password'
              name='password1'
              placeholder='Password'
            />
            <Field
              className='input'
              type='password'
              name='password2'
              placeholder='Confirm Password'
            />
            <button className='submit-button' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </StyledForm>
  );
};

export default connect((state) => state)(Register);
