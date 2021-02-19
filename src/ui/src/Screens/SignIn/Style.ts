import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formBox: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FA4454",
    borderColor: "#FA4454",
    "&:hover": {
      backgroundColor: "#DC3D4B",
      borderColor: "#DC3D4B",
      boxShadow: "none",
    },
  },
  link: {
    color: "#FA4454",
  },
  forgotPassword: {
    alignSelf: "flex-start",
    fontSize: 14,
  },
  textInput: {
    // border: "#FF8189",
    "& label.Mui-focused": {
      color: "#364966",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#364966",
      },
    },
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: theme.spacing(5),
  },
  instruction: {
    fontSize: 16,
    marginBottom: theme.spacing(1),
  },
}));
// #FF8189
export default useStyles;
