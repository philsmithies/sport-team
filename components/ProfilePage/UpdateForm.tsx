import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_COACH } from "../../graphql/updateCoach";
import Router from "next/router";

const UpdateForm = ({ coach }) => {
  const [id, setId] = useState(coach.id);
  const [name, setName] = useState(coach.name);
  const [email, setEmail] = useState(coach.email);
  const [website, setWebsite] = useState(coach.website);
  const [phone, setPhone] = useState(coach.phone);

  /***
   * !see if we can use the spread operator instead of separate states
   */

  // const handleOnChange = (event) => {
  //   setUpdatedCoach({ ...coach, [event.target.name]: event.target.value });
  // };

  const [updateCoach] = useMutation(UPDATE_COACH);

  const handleSubmit = (event) => {
    try {
      updateCoach({
        variables: {
          where: { id: coach.id },
          data: {
            email: { set: email },
            name: { set: name },
            website: { set: website },
            phone: { set: phone },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
    Router.reload();
  };

  return (
    <div className="mt-10 flex flex-col items-center bg-red-700">
      <h1 className="text-4xl">Update The Coach</h1>
      <form
        className="mt-4 flex w-44 flex-col space-y-3 bg-red-50 "
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder={name}
          />
        </label>
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder={email}
          />
        </label>
        <label>
          Website:
          <input
            onChange={(e) => setWebsite(e.target.value)}
            type="text"
            name="website"
            placeholder={website}
          />
        </label>
        <label>
          Phone:
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            name="phone"
            placeholder={phone}
          />
        </label>
        <input type="submit" value="Update Coach" className="border-2" />
      </form>
    </div>
  );
};

export default UpdateForm;
