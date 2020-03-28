import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../../../assets/bgCal.jpg'


export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#7734CB',
    },
    banner:{
        backgroundImage:`url(${logoImage})`,
        height:"100vh",
        
    },
    headingTitle:{
        backgroundColor:'#000000',
        opacity:0.7,
        height:"100vh",
    },
    accountHeading:{
      margin:0,
      color:'#ffffff',
      textAlign:'center',
      paddingTop:"35%",
      fontSize:"4em"
    },
    right:{
      display:'flex',
      // backgroundColor:'green',
      // alignItems:"center",
      flexDirection:'column',
      alignItems:'center',
      marginTop:'20%',
      paddingLeft:20,
      paddingRight:20,
    },
  btnLogin:{
    margin: theme.spacing(3, 0, 2),
    padding:15,
    fontSize:20,
    fontWeight:500,
    letterSpacing:5,
    

  },
  chkbox:{
    display:'flex',
    alignSelf: 'flex-end',
  }
  
    
   
  }));