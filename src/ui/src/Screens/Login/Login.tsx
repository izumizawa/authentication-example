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

const Login: React.FunctionComponent = () => {
  const Styles = useStyles();
  const [username, setUsername] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  return (
    <Container component="main" maxWidth="xs">
      <Box className={Styles.formBox}>
        <Typography className={Styles.title}>🌈 Welcome!</Typography>
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
          autoComplete="password"
          className={Styles.textInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Typography className={Styles.forgotPassword}>
          <Link href="#" className={Styles.link}>
            Forgot you password?
          </Link>
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={Styles.submit}
        >
          Login
        </Button>
        <Typography>
          Need an account?
          <Link href="/signin" className={Styles.link}>
            {" "}
            Sign up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
