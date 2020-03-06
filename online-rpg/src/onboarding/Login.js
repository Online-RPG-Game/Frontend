import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import StyledForm from './styles';
import runner from '../features/tiles/runner.gif'

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const url = process.env.REACT_APP_BASE_URL;

const Login = (props) => {
  const handleSubmit = (values) => {
    axios
      .post(`${url}api/login/`, values)
      .then((res) => {
        localStorage.setItem('token', res.data.key);
        props.history.push('/pregame');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledForm>
      <div style={{textAlign:'center', width: '90vw'}}>
      <h1 style={{color:'red'}}>Race Against Corona</h1>
      <p style={{color:'grey', lineHeight:'1.5em'}}>A Lambda MUD project by <br/>Liam, Toby and Mogwai</p>
      <img src={runner} alt="Race Against Corona" style={{width:"150px"}}/>
      </div>
      <h2 className='title'>Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          handleSubmit(values);
        }}
      >
        {() => (
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
        )}
      </Formik>
    </StyledForm>
  );
};

export default connect((state) => state)(Login);
