import React from "react";
import {
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  textField: {
    marginTop: "1em",
  },
  submitBox: {
    border: "10px dashed hotpink",
    padding: "1em",
    marginTop: "1em",
    borderRadius: "2em",
  },
});

function App() {
  const { register, errors, formState } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <TextField
        label="Your name"
        fullWidth
        variant="outlined"
        type="text"
        name="name"
        className={classes.textField}
        error={!!errors.name}
        inputRef={register({ required: true })}
      />
      <TextField
        label="Your phone"
        fullWidth
        variant="outlined"
        type="text"
        name="phone"
        className={classes.textField}
        error={!!errors.phone}
        inputRef={register({
          required: true,
          pattern: /^\d\d\d-\d\d\d-\d\d\d\d$/,
        })}
      />
      {formState.isValid && (
        <div className={classes.submitBox}>
          <Typography variant="h5">You are ready to go!</Typography>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained">Submit</Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default App;
