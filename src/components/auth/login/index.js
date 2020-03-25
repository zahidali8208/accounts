import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {useStyles} from './style'



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={8} className={classes.banner} >
          <div className={classes.headingTitle}>
              <h1 className={classes.accountHeading}>Accounts</h1>
          </div>
        </Grid>
        
        <Grid item xs={12} sm={4}  >
          <div className={classes.rightBox}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.userImage} />
        <TextField
          id="outlined-password-input"
          label="User Name"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        /><br /><br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        </div>
        </Grid>
      </Grid>
    </div>
  );
}
