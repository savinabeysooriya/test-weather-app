import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const SignUp = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        height="100vh"
      >
        <Box p={5} width="50%" bgcolor="#267DFF" className="view-left">
          <Container>
            <Typography
              variant="h6"
              style={{ marginTop: 100, color: "#FFFFFF", fontWeight: "bold" }}
            >
              Welcome to MDM
            </Typography>

            <hr
              style={{
                height: 6,
                backgroundColor: "#FFFFFF",
                marginRight: 300,
              }}
            />

            <Typography
              variant="body1"
              align="justify"
              style={{ marginTop: 40, color: "#FFFFFF" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam doloribus.
            </Typography>
            <Button
              variant="outlined"
              style={{
                marginTop: 40,
                borderRadius: 50,
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
              }}
            >
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
              <Typography
                variant="h6"
                align="center"
                style={{ fontWeight: "bold", marginTop: 100 }}
              >
                SignUp
              </Typography>
              <hr
                style={{
                  height: 6,
                  backgroundColor: "#267DFF",
                  width: 40,
                  marginTop: 0,
                }}
              />

              <form
                style={{
                  width: "100%",
                  marginTop: 50,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "70%",
                  }}
                >
                  <TextField label="Email" margin="normal"></TextField>
                  <TextField label="password" margin="normal"></TextField>
                  <TextField
                    label="Confirm password"
                    margin="normal"
                  ></TextField>
                </div>
              </form>
              <div
                style={{
                  width: "100%",
                  marginTop: 50,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#267dff",
                    borderRadius: "50px",
                    textTransform: "capitalize",
                    minWidth: "150px",
                  }}
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
