import React from "react";
import { useState } from "react";
import {
  TextField,
  Container,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
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
  button: {},
});

const LoginForm = ({ Login, error }) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <Container
        sx={{
          marginTop: "50px",
          width: "400px",
          height: "350px",
          backgroundColor: "##FFF8F6  ",
          justifyContent: "center",
          borderWidth: "10px",
          borderStyle: "solid",
          borderImage: "linear-gradient(to right, #E93205   ,#E68355 ) 1",
        }}
      >
        <Typography variant="h6" sx={{ paddingTop: "20px" }}>
          Login
        </Typography>
        {error != "" ? <Typography color='error' sx={{paddingBottom:'5px'}}>{error}</Typography> : ""}
        <Grid container spacing={3}>
          <Grid item>
            <TextField
              label="Email"
              type="text"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              className={classes.textField}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              className={classes.textField}
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
        </Grid>
        <Grid container sx={{ paddingTop: "20px" }}>
          <Grid item>
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              sx={{
                width: "20px",
                height: "20px",
                marginRight: "20px",
                backgroundColor: "#AA461B ",
                "&:hover": { backgroundColor: "#F3BD51  " },
              }}
            >
              Login
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              href="/register"
              sx={{
                width: "100px",
                height: "20px",
                backgroundColor: "#AA461B ",
                "&:hover": { backgroundColor: "#F3BD51  " },
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default LoginForm;
