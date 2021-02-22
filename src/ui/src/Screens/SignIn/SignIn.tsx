import React from "react";
import {
  Button,
  Container,
  TextField,
  Box,
  Link,
  Typography,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import useStyles from "./Style";

const SignIn: React.FunctionComponent = () => {
  const Styles = useStyles();
  const [username, setUsername] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [confirmPassword, setConfirmPassword] = React.useState<String>("");

  const validatePassword = (): String => {
    if (password.length !== 0) {
      if (password.length < 6 || password.length > 20) {
        return "Password must have between 6 and 20 characters.";
      }
    }
    return "Password cannot be null.";
  };

  const validateConfirmedPassword = (): String => {
    if (password !== confirmPassword) {
      return "Passwords must be equal";
    }
    return "";
  };

  const onPress = (): void => {};
  return (
    <Container component="main" maxWidth="xs">
      <Box className={Styles.formBox}>
        <Typography className={Styles.title}>Create account 😗✌️</Typography>
        <FormControl>
          <FormHelperText className={Styles.instruction}>
            Choose an unique username and password to sign in
          </FormHelperText>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            type="username"
            variant="outlined"
            margin="normal"
            autoComplete="username"
            className={Styles.textInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            autoComplete="current-password"
            className={Styles.textInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={
              password.length !== 0 &&
              (password.length > 20 || password.length < 6)
            }
            helperText={
              password.length !== 0 &&
              (password.length > 20 || password.length < 6)
                ? validatePassword()
                : null
            }
          />
          <TextField
            required
            disabled={
              password.length === 0 ||
              password.length > 20 ||
              password.length < 6
            }
            fullWidth
            id="confirm-password"
            label="Confirm password"
            type="password"
            variant="outlined"
            margin="normal"
            autoComplete="current-password"
            className={Styles.textInput}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword.length !== 0 && password !== confirmPassword}
            helperText={
              confirmPassword.length !== 0 && password !== confirmPassword
                ? validateConfirmedPassword()
                : null
            }
          />
          {/* {console.log(FormData)} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={Styles.submit}
            onClick={onPress}
          >
            Create new account
          </Button>
          <Typography>
            Already have an account?
            <Link href="/login" className={Styles.link}>
              {" "}
              Login
            </Link>
          </Typography>
        </FormControl>
      </Box>
    </Container>
  );
};

export default SignIn;
