import React from "react";
import Button from "../../shared/components/Button/Button";
import Card from "../../shared/components/Card/Card";
import Form from "../../shared/components/Form/Form";
import "./Login.scss";

const LoginPage = () => {
  return (
    <div>
      <Card className="login__card">
        <Form
          title={"Hi, welcome"}
          description={
            "Please sign-in to your account and start your experience"
          }
        >
          <Form.Input type={"email"} placeHolder={"Email"} />
          <Form.Input
            type={"password"}
            placeHolder={"Password"}
            allowShowPassword={true}
          />
        </Form>
        <div className="btn">
          <Button type={"submit"} title={"Login"} className="button--black" />
        </div>
        <div className="footer__message">
          <p>Don't have an account?</p>
          <p className="red">Register</p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
