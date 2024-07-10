import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button, Label, FormGroup, Container, Row, Col, Card, CardBody, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import AuthLogo from '../../layouts/logo/AuthLogo';
import { ReactComponent as LeftBg } from '../../assets/images/bg/login-bgleft.svg';
import { ReactComponent as RightBg } from '../../assets/images/bg/login-bg-right.svg';
import { useUserContext } from '../../userContext/userContext';
import shopifyImageBlack from "../../assets/images/logos/shopify logo black.png";
import usePostMutate from '../../hooks/shared/usePostMutate';

const LoginFormik = () => {
  const navigate = useNavigate();
  const handleError = (err) => {
    console.log(err, 'error from login page')
  }
  const onSuccess = (data)=> {
    navigate('/dashboards/minimal');
    // console.log(data);
    // console.log(data.data.data.accessToken);
    Cookies.set('AccessToken', data.data.data.accessToken, { expires: 3600 });
    console.log(data, "from login page")
  }
  const {mutate, isPending, } = usePostMutate('/auth/login',onSuccess, handleError )
  const { email, updateEmail } = useUserContext(); // Accessing email and updateEmail from context


  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleLogin = async (data) => {
    console.log(data);

    mutate(data)

    // try {
    //   const response = await axios.post(
    //     'https://theme-store-server.vercel.app/api/v1/auth/login',
    //     data,
    //   );

    //   // Handle the response as needed
    //   console.log('Login successful:', response.data.data.accessToken);
    //   if (response.data.data.accessToken) {
    //     Cookies.set('AccessToken', response.data.data.accessToken, { expires: 3600 });
    //     updateEmail(data.email); // Update email in context
    //     navigate('/dashboards/minimal');
    //   }
    //   // For example, save the token and redirect
    //   localStorage.setItem('token', response.data.token);
    //   // Redirect to a protected route
    //   // window.location.href = '/dashboard';
    // } catch (error) {
    //   // Handle error
    //   console.error('Login failed:', error);
    //   // setError('Login failed. Please check your credentials and try again.');
    // }
  };

  return (
    <div className="loginBox">
      <LeftBg className="position-absolute left bottom-0" />
      <RightBg className="position-absolute end-0 top" />
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <h5 className="mb-0">Login</h5>
                <small className="pb-4 d-block">
                  Do not have an account? <Link to="/auth/registerformik">Sign Up</Link>
                </small>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(fields) => {
                    handleLogin(fields);
                  }}
                  render={({ errors, touched, setFieldValue }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field
                          name="email"
                          type="text"
                          className={`form-control${
                            errors.email && touched.email ? ' is-invalid' : ''
                          }`}
                          onChange={(e) => {
                            setFieldValue('email', e.target.value);
                            updateEmail(e.target.value); // Update email in context
                          }}
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control${
                            errors.password && touched.password ? ' is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup className="form-check d-flex" inline>
                        <Label check>
                          <Input type="checkbox" />
                          Remember me
                        </Label>
                        <Link className="ms-auto text-decoration-none" to="/auth/forgotPwd">
                          <small>Forgot Pwd?</small>
                        </Link>
                      </FormGroup>
                      <FormGroup>
                        <Button  type="submit" color="primary" className="me-2">
                          {isPending ? 'Logging in' : 'Login'} {isPending} 

                        </Button>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginFormik;
