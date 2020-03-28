import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FaUserCircle } from "react-icons/fa";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./style";
import { Typography } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {login} from '../../redux/action/login'
import { useDispatch } from "react-redux";

toast.configure();

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("");
  // password: "",
  // showPassword: false
  const userNameHandler = e => {
    setUserName(e.target.value);
    // console.log(userName);
  };

  const [password, setPassword] = useState("");
  const passwordHandler = e => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const Submit = () => {
    let data = {
      userName: userName,
      password: password
    };
    toast.success("Login ", { autoClose: 2000 });
    console.log("Data In Components", data);
    dispatch(login(data))
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={7} className={classes.banner}>
          <div className={classes.headingTitle}>
            <h1 className={classes.accountHeading}>Accounts</h1>
          </div>
        </Grid>

        <Grid item xs={12} sm={5}>
          <div className={classes.right}>
            <FaUserCircle size="4rem" color="#3F51B5" />
            <br />
            <Typography variant="h5">Login</Typography>
            <br />
            <TextField
              id="outlined-password-input"
              label="User Name"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={userNameHandler}
            />
            <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={passwordHandler}
            />
            <br />
            <div className={classes.chkbox}>
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnLogin}
              fullWidth
              onClick={Submit}
            >
              Login
            </Button>
            <Link to="/dashboard">zahid</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
