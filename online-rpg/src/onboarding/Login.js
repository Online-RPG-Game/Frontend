import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import StyledForm from './styles';

const Login = () => {
  return (
    <StyledForm>
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
          name='password'
          placeholder='Password'
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </Form>
    </StyledForm>
  );
};

const FormikLoginUpForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  handleSubmit(values, { props }) {
    props.login(values);
  }
})(Login);

export default connect((state) => state)(FormikLoginUpForm);
