import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {ref,  object, string } from "yup";
import { User } from "../Models/User";
import AddUserService from "../Services/AddUserService";
import AuthenticationService from "../Services/AuthenticationService";

const useStyles = makeStyles({
  button: {
    marginTop: 18,
    background: "rgba(241, 103, 5)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(241, 103, 5), .3)",
  },
  loginForm: {
    marginBottom: 18,
  },
  cardTitle: {
    color: "#f16705",
  },
  loginCard: {
    marginTop: 12,
  },
});

const Results = () => (
  <div id="results" className="search-results">
    Some Results
  </div>
);
interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.loginCard}>
      <Card className="LoginCard">
        <CardHeader title="Legg Til Bruker" className={classes.cardTitle} />
        <CardContent>
          <Formik
            initialValues={{
              email: "",
              pwd: "",
              pwd2: "",
            }}
            validationSchema={object({
              email: string()
                .required("'Email må fylles inn'")
                .email("Må være en gyldig email"),
              pwd: string().required("Vennligst skriv inn passord"),
              pwd2: string().required("Vennligst gjenta passord").oneOf([ref('pwd'), null], 'Passwords must match'),
            })}
            onSubmit={async (values) => {
              /** A timer of 3 sec that disables the submit button - Somewhat prevents serverspam */
              if (values.pwd == values.pwd2) {
                return new Promise<void>((res) => {
                  setTimeout(async () => {
                    //API call & checks
                    AddUserService.register(
                      values.email.toLowerCase().trim(),
                      values.pwd.trim()
                    )
                      .then((response) => {
                        return response;
                      })
                      .then(
                        (user) => {
                          <Results />;
                        },
                        (error) => {
                          console.log("feil");
                        }
                      );
                    res();
                  }, 500);
                });
              } else {
                alert("Passord må være like");
              }
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form>
                <div className={classes.loginForm}>
                  <Field
                    name="email"
                    type="Email"
                    label="Email"
                    as={TextField}
                  />
                </div>
                <ErrorMessage name="Email">
                  {(message) => (
                    <Typography color="error">{message}</Typography>
                  )}
                </ErrorMessage>
                <div className={classes.loginForm}>
                  <Field
                    name="pwd"
                    type="Password"
                    label="Password"
                    as={TextField}
                  />
                  <ErrorMessage name="pwd">
                    {(message) => (
                      <Typography color="error">{message}</Typography>
                    )}
                  </ErrorMessage>
                </div>
                <div className={classes.loginForm}>
                  <Field
                    name="pwd2"
                    type="Password"
                    label="Confirm Password"
                    as={TextField}
                  />
                  <ErrorMessage name="pwd2">
                    {(message) => (
                      <Typography color="error">{message}</Typography>
                    )}
                  </ErrorMessage>
                </div>
                <Button
                  className={classes.button}
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size="0.8rem" />
                    ) : undefined
                  }
                >
                  {isSubmitting ? "Submitting" : "Legg til"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Login;
