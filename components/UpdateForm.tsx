import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

const UPDATE_COACH = gql`
  mutation UpdateCoach(
    $where: CoachWhereUniqueInput!
    $data: CoachUpdateInput!
  ) {
    updateCoach(where: $where, data: $data) {
      email
      name
    }
  }
`;

const UpdateForm = ({ coach }) => {
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

  const [updateCoach, { data, error }] = useMutation(UPDATE_COACH);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(coach);
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
  };

  if (error) {
    return <h1> {error} </h1>;
  }
  return (
    <form
      className="flex w-44 flex-col space-y-3 bg-red-50 "
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
  );
};

export default UpdateForm;
