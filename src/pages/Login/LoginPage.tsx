import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/components/Button/Button";
import Card from "../../shared/components/Card/Card";
import Form from "../../shared/components/Form/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.scss";
import LoginProvider from "./LoginProvider";

type PageProps = {
  email: string;
  password: string;
  handleonchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};
const LoginPage = () => {
  return (
    <div>
      <LoginProvider
        render={({
          email,
          password,
          handleonchange,
          handleSubmit,
        }: PageProps) => {
          return (
            <Card className="login__card">
              <Form
                title={"Hi, welcome"}
                description={
                  "Please sign-in to your account and start your experience"
                }
              >
                <Form.Input
                  type={"email"}
                  placeHolder={"Email"}
                  name="email"
                  value={email}
                  onChange={handleonchange}
                />
                <Form.Input
                  type={"password"}
                  placeHolder={"Password"}
                  allowShowPassword={true}
                  name="password"
                  value={password}
                  onChange={handleonchange}
                />
              </Form>
              <div className="btn">
                <Button
                  type={"submit"}
                  title={"Login"}
                  className="button--black"
                  onClick={handleSubmit}
                />
                <ToastContainer />
              </div>
              <div className="footer__message">
                <p>Don't have an account?</p>
                <Link to={"/signup"} className="red">
                  Register
                </Link>
              </div>
            </Card>
          );
        }}
      />
      ;
    </div>
  );
};

export default LoginPage;
