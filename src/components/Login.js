import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {method : 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }}
      );

      if(res.status === 200){
        Swal.fire({
          title : 'well done',
          icon : "success",
          text : "you have sucessfully logged in"
        })
      }else if(res.status=== 401){
        Swal.fire({
          title : 'OOps',
          icon : "error",
          text : "invalid credentials"
        })
      }

    },
  });

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={loginForm.handleSubmit}>
              {/* Email input */}
              <div className=" mb-4">
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                  className="form-control form-control-lg"
                />
              </div>
              {/* Password input */}
              <div className=" mb-4">
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form1Example3"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Sign in
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f me-2" />
                Continue with Facebook
              </a>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2" />
                Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
