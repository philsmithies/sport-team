import { useState } from "react";
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { SINGLE_COACH, UPDATE_COACH } from "../../../graphql/coach";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Grid,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import AddSpecialties from "./AddSpecialties";
import RemoveSpecialties from "./RemoveSpecialties";
import UpdateCoach from "../../../types/UpdateCoach";

const UpdateForm = ({ coach }: UpdateCoach): JSX.Element => {
  const [id, setId] = useState(coach.id);
  const [name, setName] = useState(coach.name);
  const [email, setEmail] = useState(coach.email);
  const [website, setWebsite] = useState(coach.website);
  const [phone, setPhone] = useState(coach.phone);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [updateCoach] = useMutation(UPDATE_COACH, {
    refetchQueries: [
      {
        query: SINGLE_COACH,
        variables: {
          where: { id: coach.id },
        },
      },
    ],
  });

  const handleSubmit = () => {
    handleClose();
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
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{
          maxWidth: 300,
          marginTop: 4,
          marginBottom: 4,
        }}
        onClick={handleClickOpen}
      >
        <UpdateIcon sx={{ marginRight: 1 }} />
        Update Coach Profile
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <DialogTitle>Update Coach Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update the chosen coach please enter one or more values that you
            would like to change.
          </DialogContentText>
          <Grid
            container
            sx={{
              marginTop: 2,
              flexDirection: "column",
            }}
          >
            <FormControl>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                margin="normal"
                placeholder={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Phone"
                variant="outlined"
                size="small"
                margin="normal"
                placeholder={phone}
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                margin="normal"
                placeholder={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Website"
                variant="outlined"
                size="small"
                margin="normal"
                placeholder={website}
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </FormControl>
          </Grid>
          <AddSpecialties coach={coach} />
          <RemoveSpecialties coach={coach} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>
            <UpdateIcon sx={{ marginRight: 1 }} />
            Update Coach
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UpdateForm;
