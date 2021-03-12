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
import { object, string } from "yup";
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

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.loginCard}>
      <Card className="LoginCard">
        <CardHeader title="Login" className={classes.cardTitle} />
        <CardContent>
          <Formik
            initialValues={{
              email: "",
              pwd: "",
            }}
            validationSchema={object({
              email: string().required().email(),
              pwd: string().required(),
            })}
            onSubmit={async (values) => {
              /** A timer of 3 sec that disables the submit button - Somewhat prevents serverspam */
              return new Promise<void>((res) => {
                setTimeout(() => {
                  //API call & checks
                  AuthenticationService.login(values.email, values.pwd)
                    .then(response => {
                      //console.log(response.text());

                      return response;
                    })
                    .then(
                      (user) => {
                        history.push("/Dashboard");
                      },
                      (error) => {
                        console.log("feil")
                      }
                    );
                  //console.log("response", Response)
                  console.log("my values", values);

                  res();
                }, 300);
              });
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
                  <Field name="pwd" label="Password" as={TextField} />
                  <ErrorMessage name="APIKey">
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
                  {isSubmitting ? "Submitting" : "Login"}
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