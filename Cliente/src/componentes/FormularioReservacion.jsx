import '../App.css';
import { useFormik } from 'formik'; 
import *as yup from 'yup';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { useState } from 'react';

const validationSchema = yup.object ({
  name : yup.string().required("E-mail is required"),
  pass : yup.string().required("Password is required"),
  passConf : yup.string().required("Password is required")
});

const FormularioReservacion = () => {

  const formik = useFormik({
    initialValues : {
      name : '',
      pass : '',
      passConf : ''
    },
    onSubmit : (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema : validationSchema;
  });

  return (
    <div className='App'>
      <form>
        <TextField 
          id='name' 
          name='email' 
          label='E-mail' 
          margin='normal'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.}
        />
        <TextField 
          id='pass' 
          name='pass' 
          label='Password' 
          margin='normal'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        
        <Button type='submit' variant='outlined'>Submit</Button>
      </form>        
    </div>
  )
}

export default FormularioReservacion;
