import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Form, Formik } from "formik";
import { TextareaAutosize } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function AskQuestionForm() {
  const classes = useStyles();
  const initialValues = { title: "", description: "" };

  const handleSubmit = async (values) => {
    alert(
      "Title:-> " +
        values.title +
        " , " +
        "Description:-> " +
        values.description
    );
    
  };

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Formik
          initialValues={initialValues}
          // validationSchema={LoginValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form autoComplete>
                <div className={classes.form} noValidate style={{textAlign:'left'}}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    autoComplete="email"
                    autoFocus
                    onChange={formik.handleChange}
                   
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    formik={formik}
                  />
                  <label >Description</label>
                  <br/>
                  <TextareaAutosize
                  minRows={3}
                  style={{width:'100%'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    type="description"
                    id="description"
                    autoComplete="current-description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    formik={formik}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
