import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import { register } from '../onboarding/index';
import StyledForm from './styles';

const Register = () => {
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
        <Field
          className='input'
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </Form>
    </StyledForm>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  handleSubmit(values, { props }) {
    props.register(values);
  }
})(Register);

export default connect((state) => state, { register })(
  FormikSignUpForm
);
