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
          <Link href="#" className={Styles.link}>
            {" "}
            Sign up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
