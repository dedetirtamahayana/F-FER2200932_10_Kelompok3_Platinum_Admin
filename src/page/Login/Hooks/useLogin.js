import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../../redux/Login/slice";

function useLogin() {
  const { loading } = useSelector((state) => state.login);
  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());
      const response = await axios.post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
        formValues
      );
      console.log(response.data);
      dispatch(loginSuccess(response.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    formValues,
    loading,
    setFormValues,
    handleSubmit,
  };
}

export default useLogin;
