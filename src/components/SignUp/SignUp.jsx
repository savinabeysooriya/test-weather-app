import React from "react";
import "./styles.scss";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";

const SignUp = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        height="100vh"
      >
        <Box p={5} width="50%" bgcolor="#267DFF">
          <Container>
            <Typography className="title" variant="h6">
              Welcome to MDM
            </Typography>

            <hr className="left-line" />

            <Typography
              variant="body1"
              align="justify"
              className="left-paragraph"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam doloribus.
            </Typography>
            <Button className="left-button" variant="outlined">
              Know More
            </Button>
          </Container>
        </Box>
        <Box p={5} width="50%">
          <Container
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div width="100%">
              <Typography className="right-text" variant="h6" align="center">
                SignUp
              </Typography>
              <hr className="right-line" />

              <form className="form">
                <div className="text-field">
                  <TextField label="Email" margin="normal"></TextField>
                  <TextField label="password" margin="normal"></TextField>
                  <TextField
                    label="Confirm password"
                    margin="normal"
                  ></TextField>
                </div>
              </form>
              <div className="div-right-btn">
                <Button
                  variant="contained"
                  color="primary"
                  className="right-btn"
                >
                  SignUp
                </Button>
              </div>
            </div>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
