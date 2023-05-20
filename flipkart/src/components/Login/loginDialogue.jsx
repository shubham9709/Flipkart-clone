import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { useState,useContext } from "react";
import {  authenticateSignUp, authenticateLogIn } from "../../service/api";
import React from "react";
import DataProvider, { DataContext } from "../../context/dataProvider";
const useStyles = makeStyles({
  component: {
    height: "60vh",
    width: "75vh",
  },
  leftContainer: {
    background:
      "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 75% no-repeat",
    height: "85%",
    width: "30%",
    padding: "45px 35px",
    color: "#fff",
    
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "25px 35px",
    flex: "1",
    marginTop: "20px",
  },
  LoginButton: {
    textTransform: "none",
    backgroundColor: "#fb641b",
    color: "#ffffff",
    borderRadius: "2px",
    height: "48px",
  },
  Text: {
    color: "#878787",
  },
  CreateAccount: {
    textAlign: "center",
    color: "#2874f0",
    cursor: "pointer",
  },
  error: {
    fontSize:'10px',
    color: '#ff6161',
    lineHeight: '0px',
    marginTop: '10px',
    fontWeight: 'bold',
  }
});

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };
  const accountInitialValues = {
    login:{
      view:'login',
      heading:'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations',
    },
    signup:{
      view:'signup',
      heading:"Looke like you're new here",
      subHeading: 'Sign Up with your mobile number to get started',
    }
  };
  const SignUpInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
  };
  const LoginInitialValues = {
    username: '',
    password: ''
  };
  const [logIn,setLogIn] = useState(LoginInitialValues);
  const [account,toggleAccount]=useState(accountInitialValues.login);
  const {acnt, setAccount} = useContext(DataContext);
  const [signUp,setSignUp] = useState(SignUpInitialValues);
  const [error , setError] = useState(false);
  const toggleSignup= ()=>{
    toggleAccount(accountInitialValues.signup);
  };
  const toggleLogin= ()=>{
    toggleAccount(accountInitialValues.login);
  };
  const onInputChange = (e) => {
    setSignUp({...signUp,[e.target.name]: e.target.value});
    // console.log(signUp);
  }
  const loginUser = async () => {
    let response =await authenticateLogIn(logIn);
    if(response.status===200)
    {
      handleClose();
      setAccount(response.data.data.firstname);
    }
    else{
      setError(true);
    }
   }
  const userSignUp = async () => {
    let response = await authenticateSignUp(signUp);
    if(!response)return;
    handleClose();
    setAccount(signUp.firstname);
  } 
  const onValueChange = (e) => {
    setLogIn({...logIn,[e.target.name]: e.target.value});
  }
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Box className={classes.component} style={{overflow:'hidden'}}>
        <Box style={{ display: "flex", height: "100%" }}>
          <Box className={classes.leftContainer}>
            <Typography variant="h4">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Box>

          {account.view === 'login'? (
            <Box className={classes.rightContainer}>
              <TextField variant="standard" label="Enter Username" onChange={(e) => onValueChange(e)} name="username" />
              
              <TextField
                variant="standard"
                label="Enter Password"
                style={{ marginTop: "20px" }}
                onChange={(e) => onValueChange(e)}
                name="password"
              />
              {error && <Typography className={classes.error} style={{fontWeight:'bold', fontSize:'12px'}}>Invalid Username or password</Typography> }
              <Typography
                style={{ marginTop: "20px", fontSize: "13px" }}
                className={classes.Text}
              >
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button
                style={{
                  marginTop: "20px",
                  backgroundColor: "#fb641b",
                  color: "#ffffff",
                }}
                className={classes.LoginButton}
                onClick={() => loginUser()}
              >
                Login
              </Button>
              <Typography style={{ marginTop: "20px", textAlign: "center" }}>
                OR
              </Typography>
              <Button
                style={{
                  marginTop: "20px",
                  textTransform: "none",
                  backgroundColor: "#fff",
                  color: "#2874f0",
                  borderRadius: "2px",
                  height: "48px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                }}
              >
                Request OTP
              </Button>
              <Typography
                className={classes.CreateAccount}
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                onClick={() => toggleSignup()}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.rightContainer}>
              <TextField onChange={(e) => onInputChange(e)} name="firstname" variant="standard" label="Enter First Name" />
              <TextField onChange={(e) => onInputChange(e)} style={{marginTop:'20px'}} name="lastname" variant="standard" label="Enter Last Name" />
              <TextField onChange={(e) => onInputChange(e)} style={{marginTop:'20px'}} name="username" variant="standard" label="Enter UserName" />
              <TextField onChange={(e) => onInputChange(e)} style={{marginTop:'20px'}} name="email" variant="standard" label="Enter Email" />
              <TextField onChange={(e) => onInputChange(e)} style={{marginTop:'20px'}} name="password" variant="standard" label="Enter Password" />
              <TextField onChange={(e) => onInputChange(e)} style={{marginTop:'20px'}} name="phone" variant="standard" label="Enter Phone" />

              <Button
                style={{
                  marginTop: "20px",
                  backgroundColor: "#fb641b",
                  color: "#ffffff",
                }}
                className={classes.LoginButton}
                onClick={()=> userSignUp()}
              >
                Continue
              </Button>
              <Button
                style={{
                  marginTop: "20px",
                  textTransform: "none",
                  backgroundColor: "#fff",
                  color: "#2874f0",
                  borderRadius: "2px",
                  height: "48px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                  fontWeight: "bold",
                }}
                onClick={() => toggleLogin()}
              >
                Existing User? Log in
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};
export default LoginDialog;
