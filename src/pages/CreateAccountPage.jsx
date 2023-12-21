import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import CreateAccountForm from "../Components/Login/CreateAccountForm";
import { useDispatch } from "react-redux";

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateAccount = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/create-account", formData);

    if (res.data.success) {
      dispatch({
        type: "SET_USER_ID",
        payload: res.data.userId,
      });
      navigate("/");
    }
  };

  return (
    <div className="create-account-page">
      <CreateAccountForm onCreateAccount={handleCreateAccount} />
    </div>
  );
};

export default CreateAccountPage;
