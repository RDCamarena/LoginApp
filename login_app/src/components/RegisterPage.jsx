import React, { useState } from "react";
import Axios from "axios";
import { TextField, Container, Button, Grid, Typography,  InputAdornment,
  IconButton,} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles({
  textField: {
    borderColor: "#DB7F4B ",
    "& label.Mui-focused": {
      color: "#DB7F4B ",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#DB7F4B ",
      },
      "&:hover fieldset": {
        borderColor: "#F3BD51 ",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#DB7F4B ",
      },
    },
  },

});

const RegisterPage = () => {
  const [register, setRegister] = useState(false);

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [registerUser, setRegisterUser] = useState({ firstName:'', lastName:'', email:'', address:'', city:'', country:'',postal:'',password:''})

  
  const Register = async  () => {
    await Axios.post("http://localhost:3001/register", {
      firstName: registerUser.firstName,
      lastName: registerUser.lastName,
      email: registerUser.email,
      address: registerUser.address,
      city: registerUser.city,
      country: registerUser.country,
      password: registerUser.password,
      postal: registerUser.postal,
    }).then(() => {
      setRegisterUser({...registerUser, firstName:'',lastName:'', email:'', address:'', city:'', postal:'', country:'',password:''})
      setRegister(true);

      console.log("success");
    });
  };

  return (
    <>
      <Container
        sx={{
          marginTop: "100px",
          width: "600px",
          height: "550px",
          backgroundColor: "##FFF8F6  ",
          justifyContent: "center",
          borderWidth: "10px",
          borderStyle: "solid",
          borderImage: "linear-gradient(to right, #E93205   ,#E68355 ) 1",
        }}
      >
        <Grid
          container
          direction="column"
          spacing={2}
          columnSpacing={3}
          sx={{ marginTop: "20px" }}
        >
          <Grid
            item
            xs={4}
            sx={{
              marginLeft: "1px",
            }}
          >
            <Typography variant="h6">Register</Typography>
          </Grid>

          <Grid item xs={7}>
            <TextField
              className={classes.textField}
              type="text"
              label="First Name"
              onChange={(e) => {
                setRegisterUser({...registerUser, firstName:e.target.value});
              }}
              value={registerUser.firstName}
              sx={{
                paddingRight: "62px",
              }}
            ></TextField>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, lastName:e.target.value});
              }}
              value={registerUser.lastName}
              type="text"
              label="Last Name"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, address:e.target.value});
              }}
              value={registerUser.address}
              type="text"
              label="Address"
              sx={{
                width: "250px",
                paddingRight: "35px",
              }}
            ></TextField>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, city:e.target.value});
              }}
              value={registerUser.city}
              type="text"
              label="City"
              sx={{}}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, country:e.target.value});
              }}
              value={registerUser.country}
              type="text"
              label="Country"
              sx={{
                width: "300px",
                paddingRight: "35px",
              }}
            ></TextField>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, postal:e.target.value});
              }}
              value={registerUser.postal}
              type="text"
              label="Postal"
              sx={{
                width: "100px",
              }}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, email:e.target.value});
              }}
              value={registerUser.email}
              type="text"
              label="Email"
              sx={{
                width: "509px",
              }}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              type={showPassword ? 'text' : 'password'}
              className={classes.textField}
              onChange={(e) => {
                setRegisterUser({...registerUser, password:e.target.value});
              }}
              value={registerUser.password}
              label="Password"
              sx={{
                width: "509px",
              }}
              InputProps={{
                
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ width: "20px" }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              sx={{
                marginLeft: "23px",
                marginTop:"10px",
                width: "100px",
                backgroundColor: "#AA461B ",
                "&:hover": { backgroundColor: "#F3BD51" },
              }}
              onClick={Register}
            >
              Register
            </Button>
            {register == true ? (
              <Typography sx={{ marginTop: "10px", marginLeft: "120px" }}>
                You are Register!{" "}
                <Button
                  href="/"
                  sx={{
                    color: "#AA461B ",
                    "&:hover": { color: "#F3BD51  " },
                  }}
                >
                  Go Back To LogIn
                </Button>
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RegisterPage;
