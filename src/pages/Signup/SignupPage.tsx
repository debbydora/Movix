import React from "react";
import Button from "../../shared/components/Button/Button";
import Card from "../../shared/components/Card/Card";
import Form from "../../shared/components/Form/Form";
import "./Signup.scss";
import SignupProvider from "./SignupProvider";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type PageProps = {
  email: string;
  password: string;
  fullName: string;
  loading: boolean;
  handleonchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SignupPage = () => {
  return (
    <SignupProvider
      render={({
        email,
        password,
        fullName,
        handleonchange,
        handleSubmit,
        loading,
      }: PageProps) => {
        return (
          <div className="card__box">
            <Card>
              <Form
                title={"Hi, welcome"}
                description={"Please sign-up to start your experience"}
              >
                <Form.Input
                  placeHolder={"Full Name"}
                  name={"fullName"}
                  value={fullName}
                  onChange={handleonchange}
                  required={true}
                />
                <Form.Input
                  type={"email"}
                  placeHolder={"Email"}
                  name={"email"}
                  value={email}
                  onChange={handleonchange}
                  required={true}
                />
                <Form.Input
                  type={"password"}
                  placeHolder={"Password"}
                  allowShowPassword={true}
                  name={"password"}
                  onChange={handleonchange}
                  value={password}
                  required={true}
                />
              </Form>
              <div className="btn">
                <Button
                  type={"submit"}
                  title={"Register"}
                  className="button--black"
                  onClick={handleSubmit}
                  disabled={loading}
                />
                <ToastContainer />
              </div>
              <div className="footer__message">
                <p>Already have an account?</p>
                <Link to={"/login"} className="red">
                  Login
                </Link>
              </div>
            </Card>
          </div>
        );
      }}
    />
  );
};

export default SignupPage;
