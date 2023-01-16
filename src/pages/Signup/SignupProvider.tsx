import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { registerationOfUser } from "../../store/actions/userActions";

export type SignupProviderProps = {
  render: any;
};
const SignupProvider = (props: SignupProviderProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const { currentUser, loading, error } = useSelector(
    (state: any) => state.user
  );
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
    if (name === "fullName") {
      setFullName(value);
    }
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (email === "" || password === "" || fullName === "") {
      return toast.error("please enter your details");
    }
    dispatch(registerationOfUser({ email, password, fullName }));
    if (error) {
      toast.error(error);
    } else {
      toast.success("Registeration successful");
    }

    setEmail("");
    setFullName("");
    setPassword("");
  };
  return props.render({
    email,
    password,
    handleonchange,
    handleSubmit,
    fullName,
    loading,
  });
};

export default SignupProvider;
