import React, { useState,} from "react";
import Axios from "axios";
import LoginForm from "../components/LoginForm";
import Profile from './Profile'



const Home = () => {
  const [logInUser, setLogInUser] = useState({ email: "", password: "" });
  const [user, setUser] = useState({first_name:'', last_name:'',address:'',region:'', country:'', postal:'' })


  const [error, setError] = useState("");

  const Login = async (details) => {
    await Axios.post("http://localhost:3001/login", {
      email: details.email,
      password: details.password,
    }).then((response) => {
      if (response.data.length > 0) {
        setLogInUser({
          ...logInUser,
          email: response.data[0].email,
          password: response.data[0].password,
        });

        setUser({
          ...user,
          first_name:response.data[0].first_name,
          last_name:response.data[0].last_name,
          address:response.data[0].address,
          postal:response.data[0].postalZip,
          region: response.data[0].region,
          country:response.data[0].country
          
        })
      }
    });

    

    if (
      details.email === logInUser.email &&
      details.password &&
      logInUser.password
    ) {
      console.log("You are in");
      setError('');
    } else {
      setError("Wrong email/password");
    }
  };

  const Logout = () => {
    setLogInUser({
      ...logInUser,
      email: "",
      password: "",
    });
    setUser({
      ...user,
          first_name:'',
          last_name:'',
          address:'',
          postal:'',
          region: '',
          country:''

    })
    setError('')
  };

  

  return (
    <>
      {logInUser.email !== "" ? (
        <Profile user={user}Logout={Logout}/>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
};

export default Home;
