import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';

const Login = () => {
  return (
    <Form>
      <Field type='text' name='username' placeholder='Username' />
      <Field type='email' name='email' placeholder='Email' />
      <Field type='password' name='password' placeholder='Password' />
      <button type='submit'>Submit</button>
    </Form>
  );
};

const FormikLoginUpForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(Login);

export default connect((state) => state)(FormikLoginUpForm);
