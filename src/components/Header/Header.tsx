import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloudIcon from '@material-ui/icons/Cloud';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {FormattedMessage} from 'react-intl'

import './styles.scss';



const Header = () => {

  // const history = useHistory();

  // function logOut(){

  //   // localStorage.clear();
  //   history.push('/signin')

  // }

  return (

    
    <AppBar position="static" className="toolbar" color="transparent">
      <Toolbar>
        <CloudIcon className="appLogo" />
        <Typography variant="h5" className="appTitle">
          <FormattedMessage id="titleMessage" defaultMessage="Weather app"/>
         
        </Typography>
        {/* <Button className="logout" variant="outlined" onClick={logOut}>LOGOUT </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
