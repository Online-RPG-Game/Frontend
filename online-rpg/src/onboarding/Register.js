import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import { register } from '../onboarding/index';

const Register = () => {
  return (
    <Form>
      <Field type='text' name='username' placeholder='Username' />
      <Field type='email' name='email' placeholder='Email' />
      <Field type='password' name='password' placeholder='Password' />
      <Field
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
      />
      <button type='submit'>Submit</button>
    </Form>
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
