import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

const CREATE_USER = gql`
  mutation CreateCoach($data: CoachCreateInput!) {
    createCoach(data: $data) {
      id
      email
      name
      phone
      website
    }
  }
`;

const CoachForm = () => {
  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const [createUser, { data, error }] = useMutation(CREATE_USER);

  const handleSubmit = (event) => {
    createUser({ variables: { data: { ...user } } });
    event.preventDefault();
  };

  if (error) {
    return <h1> {error} </h1>;
  }

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

export default CoachForm;
