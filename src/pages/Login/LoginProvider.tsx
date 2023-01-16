import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { loginUserInitiation } from "../../store/actions/userActions";

export type LoginProviderProps = {
  render: any;
};

const LoginProvider = (props: LoginProviderProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, error } = useSelector((state: any) => state.user);
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleonchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return toast.error("please enter your credentials");
    }
    dispatch(loginUserInitiation({ email, password }));
    if (error) {
      toast.error(error);
    }
    setEmail("");
    setPassword("");
  };

  return props.render({
    email,
    password,
    handleonchange,
    handleSubmit,
  });
};

export default LoginProvider;
