import '../App.css';
import { useFormik } from 'formik'; 
import *as yup from 'yup';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const validationSchema = yup.object ({
  email : yup
    .string()
    .email()
    .required("E-mail is required"),
  pass : yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
    // .matches(
    //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ),
  passConf : yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .oneOf([yup.ref("pass"), null], "Passwords must match")
});

const FormularioRegistro = () => {  

  const formik = useFormik({
    initialValues : {
      email : '',
      pass : '',
      passConf : ''
    },
    
    validationSchema : validationSchema,

    onSubmit : (values) => {

      const requestOptions = {
        method: 'POST'      
      };
      
      fetch(`http://localhost:9000/user/create/email/${values.email}/pass/${values.pass}`
              ,requestOptions)
        .then(res => res.json())
        /* .then(data => this.setState({ postId: data.id })); */
    }    
  });

  return (
    <div /* className='App' */>
      <form onSubmit={formik.handleSubmit}>
        <TextField 
          id='email' 
          name='email' 
          label='E-mail' 
          margin='normal'
          value={formik.values.email}   
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean (formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField 
          type="password"
          id='pass' 
          name='pass' 
          label='Password' 
          margin='normal'
          value={formik.values.pass}   
          onChange={formik.handleChange}
          error={formik.touched.pass && Boolean (formik.errors.pass)}
          helperText={formik.touched.pass && formik.errors.pass}
        /> 
        <TextField 
          type="password"
          id='passConf' 
          name='passConf' 
          label='Confirm password' 
          margin='normal'
          value={formik.values.passConf}   
          onChange={formik.handleChange}
          error={formik.touched.passConf && Boolean (formik.errors.passConf)}
          helperText={formik.touched.passConf && formik.errors.passConf}
        />        
        <Button type='submit' variant='outlined'>Submit</Button> 
      </form>        
    </div>
  )
}

export default FormularioRegistro;
