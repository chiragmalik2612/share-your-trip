import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
import "./register.css";
const Login = () => {
  return (
    <Paper elevation={3} className="container">
      <div className="upper">
        {/* <div className="logo">
          <img src={logo} alt="logo" style={{ width: "100%" }}></img>
        </div> */}
        <div className="title">
          <h2
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              backgroundColor: "white",
              marginLeft: "1rem",
            }}
          >
            Log In
          </h2>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="lower">
        <form>
          <div className="inputs">
            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder="enter your email"
              size="small"
              style={{ margin: "0.5rem", marginTop: "3rem" }}
            />

            <TextField
              required
              id="outlined-required"
              label="Password"
              placeholder="your password"
              size="small"
              style={{ margin: "0.5rem" }}
            />

            <div className="login" style={{display:"flex", gap:"25px"}}>

            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography style={{ marginTop: "1.25rem", textAlign:"left" }}>
                Forgot Password?
              </Typography>
            </Link>

            <Button
              variant="contained"
              size="small"
              style={{ marginTop: "1rem" }}
            >
              LogIn
            </Button>
            </div>

            <Link to="#" style={{ textDecoration: "none" }}>
              <Typography style={{ marginTop: "2rem" }}>
                Don't have an account? Register
              </Typography>
            </Link>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default Login;
