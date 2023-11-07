import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import CreateAccountForm from "../Components/Login/CreateAccountForm";
import { Link } from "react-router-dom";

const CreateAccountPage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/create-account", formData);

    if (res.data.success) {
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
