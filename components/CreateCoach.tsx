import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COACH } from "../graphql/createCoach";
import { ALL_COACHES } from "../graphql/allCoaches";
import Router from "next/router";

const CreateCoach = () => {
  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const [createUser] = useMutation(CREATE_COACH);

  const handleSubmit = (event) => {
    createUser({
      variables: { data: { ...user } },
    });
  };

  return (
    <div className="container mx-auto">
      <div className="mt-20 flex h-72 flex-col items-center justify-center">
        <h1 className="mb-5 text-3xl">Create a New Coach</h1>
        <form
          className="flex w-44 flex-col space-y-3 bg-red-50 "
          onSubmit={handleSubmit}
        >
          <label>
            Name:
            <input onChange={handleOnChange} type="text" name="name" />
          </label>
          <label>
            Email:
            <input onChange={handleOnChange} type="text" name="email" />
          </label>
          <label>
            Phone:
            <input onChange={handleOnChange} type="text" name="phone" />
          </label>
          <label>
            Website:
            <input onChange={handleOnChange} type="text" name="website" />
          </label>
          <input type="submit" value="Create Coach" className="border-2" />
        </form>
      </div>
    </div>
  );
};

export default CreateCoach;
