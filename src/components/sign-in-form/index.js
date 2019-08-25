import React from "react";
import "./styles.scss";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const SignInForm = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl>
          <TextField
            id="outlined-name"
            label="Username"
            className="textField"
            // value={values.name}
            // onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <TextField
            id="outlined-name"
            label="Password"
            className="textField"
            // value={values.name}
            // onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
