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
    rightBox:{
      backgroundColor:'purple',
      alignItems:'center'
      
    }
    
   
  }));