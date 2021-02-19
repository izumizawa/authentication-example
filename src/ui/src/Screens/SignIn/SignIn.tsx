import React from "react";
import {
  Button,
  Container,
  TextField,
  Box,
  Link,
  Typography,
} from "@material-ui/core";
import useStyles from "./Style";

const SignIn: React.FunctionComponent = () => {
  const Styles = useStyles();
  const [username, setUsername] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  // const usernameInput = (value: String): void => {
  //   setUsername(value);
  // };
  // const passwordInput = (value: String): void => {
  //   setPassword(value);
  // };

  const onPress = (): void => {};
  return (
    <Container component="main" maxWidth="xs">
      <Box className={Styles.formBox}>
        <Typography className={Styles.title}>Create account 😗✌️</Typography>
        <Typography className={Styles.instruction}>
          Choose an unique username and password to sign in
        </Typography>
        <form noValidate>
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
          />
          {console.log(FormData)}
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
            <Link href="" className={Styles.link}>
              {" "}
              Login
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;
