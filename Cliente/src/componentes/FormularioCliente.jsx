import '../App.css';
import { useFormik } from 'formik'; 
import *as yup from 'yup';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const validationSchema = yup.object ({
  name : yup.string().required("E-mail is required"),
  last_name : yup.string().required("Lastname is required"),
  address : yup.string().required("Address is required"),
  city : yup.string().required("City is required"),
  state : yup.string().required("State is required"),
  country : yup.string().required("Country is required"),
  cellphone : yup.string().required("Cellphone is required"),
  /* account_type : yup.string().required(" is required"), */

});

const FormularioRegistro = () => {  

  const formik = useFormik({
    initialValues : {
      name : '',
      last_name : '',
      address : '',
      city : '',
      state : '',
      country : '',
      cellphone : '',
      /* account_type : '' */
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
    <div className='App'>
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
