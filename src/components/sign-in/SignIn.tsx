import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { userContextApi } from '../Context/Context';

const defaultTheme = createTheme();


export default function SignIn() {
    

  let {name,setName}=React.useContext(userContextApi);

let [val,setValue]=useState({
  password:"",
  email:""
})
let {password,email}= val;





let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  let{name,value}=e.target;
  setValue({...val,[name]:value})
}


  const navigate=useNavigate()
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let {data}=await axios.get("http://localhost:5000/datas");
    console.log(data);
    if(data){
      data.map((datas,index)=>{
        if(datas.email===val.email && datas.password===val.password){
          toast.success("Login SuccessFull");
          setName(datas.firstName);
          setTimeout(()=>{navigate("/Mainpage")},1500)
        }
      })
      setTimeout(()=>{
        toast.error("Wrong Credentials");
      setValue({password:"",email:""})
      },2000)
    }else{
      toast.error("Data Not Identified")
    }
   
    
  };




  return (
    <main className='main'>
    <Box sx={{position:"absolute",top:"50%",left:"50%",transform:"Translate(-50%,-50%)", bgcolor:"white" ,width:"35%" ,height:"70%"}}>
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
         
          sx={{
            padding:3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={()=>navigate("/")}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    <Toaster/>
    </Box>
    </main>
  );



}


