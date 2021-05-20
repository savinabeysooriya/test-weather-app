import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import "./styles.scss";

import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup.string("Enter Your Name").required("Required"),
      email: yup
        .string("Enter Your Email")
        .email("Invalid email address")
        .required("Required"),
      password: yup.string("Enter Your Password").required("Required"),
      confirmPassword: yup.string("Confirm Your Password").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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

              <form className="form" onSubmit={formik.handleSubmit}>
                <div className="text-field">
                  <TextField label="Name" margin="normal"
                   id="name"
                   name="name"
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   error={formik.touched.name && Boolean(formik.errors.name)}
                   helperText={formik.touched.name && formik.errors.name}
                  ></TextField>

                  <TextField label="Email" margin="normal"
                   id="email"
                   name="email"
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   error={formik.touched.email && Boolean(formik.errors.email)}
                   helperText={formik.touched.email && formik.errors.email}
                  ></TextField>

                  <TextField label="password" margin="normal"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={
                    formik.touched.password && formik.errors.password
                  }
                  ></TextField>
                  <TextField
                    label="Confirm password"
                    margin="normal"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }

                  ></TextField>
                  <div className="div-right-btn">
                    <Button
                      variant="contained"
                      color="primary"
                      className="right-btn"
                      type="submit"
                    >
                      SignUp
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
