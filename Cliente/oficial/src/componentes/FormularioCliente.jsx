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

const FormularioCliente = () => {  

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
          id='name' 
          name='name' 
          label='Name' 
          margin='normal'
          value={formik.values.name}   
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean (formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField 
          id='last_name' 
          name='last_name' 
          label='Last Name' 
          margin='normal'
          value={formik.values.last_name}   
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean (formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
        /> 
        <TextField 
          id='address' 
          name='address' 
          label='Address' 
          margin='normal'
          value={formik.values.address}   
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean (formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField 
          id='city' 
          name='city' 
          label='City' 
          margin='normal'
          value={formik.values.city}   
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean (formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        /> 
        <TextField 
          id='state' 
          name='state' 
          label='state' 
          margin='normal'
          value={formik.values.state}   
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean (formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
        /> 
        <TextField 
          id='country' 
          name='country' 
          label='Country' 
          margin='normal'
          value={formik.values.country}   
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean (formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />  
        <TextField 
          id='cellphone' 
          name='cellphone' 
          label='Cellphone' 
          margin='normal'
          value={formik.values.cellphone}   
          onChange={formik.handleChange}
          error={formik.touched.cellphone && Boolean (formik.errors.cellphone)}
          helperText={formik.touched.cellphone && formik.errors.cellphone}
        />      








        <Button type='submit' variant='outlined'>Submit</Button> 
      </form>        
    </div>
  )
}

export default FormularioCliente;
