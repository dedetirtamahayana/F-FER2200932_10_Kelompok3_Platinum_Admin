import loginadmin from "../../assets/image/loginadmin.png";
import Logologin from "../../assets/image/logo2.svg";
import useLogin from "../../page/Login/Hooks/useLogin";
import { Form, Button, Card } from "react-bootstrap";
import NoAuth from "../../components/noauth/index";
const LoginAdmin = () => {
  const { loading, formValues,
    setFormValues, 
    handleSubmit,
    formErrors,
  
  } = useLogin();


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
              {Object.keys(formErrors).length === 0 ? (
                ""
              ) : (
                <Card className="bg-danger-subtle" style={{height: '75%'}}>
                  <div className="text-danger ms-3 mt-3 mb-3">Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital !</div>
                </Card>
                 // <pre>{JSON.stringify(formValues, undefined, 2)}</pre> //memunculkan data input
              )}
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
                 <p className="text-danger">{formErrors.email}</p>
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
                {
                  formErrors.password ? (
                    <p className="text-danger">{formErrors.password}</p>
                    
                  ) : (
                    <p>Password minimal 6 karakter !!</p>
                  )
                }
                
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
