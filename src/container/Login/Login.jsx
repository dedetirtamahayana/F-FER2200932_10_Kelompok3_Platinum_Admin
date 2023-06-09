import React, { useState } from "react";
import loginadmin from "../../assets/image/loginadmin.png";
import Logologin from "../../assets/image/logo2.svg";
import useLogin from "../../page/Login/Hooks/useLogin";
import { Form, Button } from "react-bootstrap";
import NoAuth from "../../components/noauth/index";
const LoginAdmin = () => {
  const { loading, formValues, setFormValues, handleSubmit } = useLogin();
  return (
    <NoAuth>
      <div className="container-fluid">
        <div className="row">
          <div className="login-left col-8">
            <img className="w-100" src={loginadmin} alt="" />
          </div>
          <div className="login-right col-4">
            <img src={Logologin} alt="BCR" className="login-logo" />
            <h3 className="login-title">Welcome, Admin BCR</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                  value={formValues.email ?? ""}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      password: e.target.value,
                    });
                  }}
                  value={formValues.password ?? ""}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3"
                disabled={loading}
              >
                {loading ? "Sabar bangg..." : "Sign In"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </NoAuth>
  );
};

export default LoginAdmin;
