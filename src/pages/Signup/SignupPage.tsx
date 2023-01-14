import React from "react";
import Button from "../../shared/components/Button/Button";
import Card from "../../shared/components/Card/Card";
import Form from "../../shared/components/Form/Form";
import "./Signup.scss";

const SignupPage = () => {
  return (
    // <div>
    <Card>
      <Form
        title={"Hi, welcome"}
        description={"Please sign-up to start your experience"}
      >
        <Form.Input placeHolder={"Full Name"} />
        <Form.Input type={"email"} placeHolder={"Email"} />
        <Form.Input
          type={"password"}
          placeHolder={"Password"}
          allowShowPassword={true}
        />
      </Form>
      <div className="btn">
        <Button type={"submit"} title={"Register"} className="button--black" />
      </div>
      <div className="footer__message">
        <p>Already have an account?</p>
        <p className="red">Login</p>
      </div>
    </Card>
    // </div>
  );
};

export default SignupPage;
