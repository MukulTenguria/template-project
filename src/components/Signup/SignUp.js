import { Button, TextField } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react'
import LoginBanner from '../../images/loginBanner.png'
import { useFormik } from "formik"
import { LoginSchema } from "../../ValidatinSchema/LoginSchema"
const SignUp = () => {
  const [formdetail, setFormDetail] = useState({
    email: "",
    password: "",
  })
  const theme = createTheme({
    components: {
      MuiTextField: {
        color: "red",
        styleOverrides: {
          root: {
            '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
              color: "white"
            },
            '& label': {
              color: 'grey',
            },
            '& label.Mui-focused': {
              color: '#3E68A8',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'grey',
                borderWidth: "2px",
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3E68A8',
              },
            },
          },
        },
      }
    }
  })

  // FORM DETAIL

  const handleOnChangeFormDetail = (e) => {
    const { value, name } = e.target
    console.log(value)
    setFormDetail((prev) => {
      if (e.target.name === "email") {
        return {
          email: e.target.value,
          password: prev.password
        }
      } else if (e.target.name === "password") {
        return {
          email: prev.email,
          password: e.target.value
        }
      } else {
        return {
          ...prev
        }
      }
    })
  }

  // FORM VALIDATION 

  const initialValues = {
    email: "",
    password: ""
  }
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (value) => {
      console.log(value)
    }
  })
  console.log(errors)
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <div className='flex h-screen'>
          <div className='w-[65%] flex flex-col items-center text-white bg-[#1c222b] '>
            <div className='flex flex-col items-center my-10 font-bold font-serif'>
              <h1 className='text-4xl'>Hi, Welcome Back</h1>
            </div>
            <div className='my-5'>
              <img src={LoginBanner} alt="bannerImage" />
            </div>
          </div>
          <div className='w-[35%] bg-[#161C24] flex flex-col px-10 justify-center'>
            <div className='my-2'>
              <h2 className='text-white font-bold text-2xl text-start'>Sign in your Account</h2>
            </div>
            <div className='my-3'>
              <p className='text-white font-bold text-1xl text-start'>New User?<a href='#' className='text-red-700'>Create an Account</a></p>
            </div>
            <div className='flex flex-col mt-10 space-y-5'>
              <TextField color='primary' variant='outlined' type="email" label="Email Address" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />

              <TextField color='primary' variant='outlined' type="email" label="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

            </div>

            <div className='flex flex-col items-end'>
              <a href='#' className='text-white m-5 underline'>Forgot password?</a>
            </div>
            <Button type='submit' color='primary' size='large' variant='contained'>Login</Button>
          </div>
        </div>
      </form>
    </ThemeProvider>
  )
}

export default SignUp
