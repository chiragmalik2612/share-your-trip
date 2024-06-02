import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
// import logo from "../images/logo.png";
import "./register.css";
const Register = () => {
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
            Register
          </h2>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="lower">
        <form>
          <Avatar
            sx={{ width: 90, height: 90 }}
            style={{
              margin: "auto",
              marginTop: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            Add pic
          </Avatar>
          <div className="inputs">
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder="your name"
              size="small"
              style={{ margin: "0.5rem" }}
            />

            <TextField
              required
              id="outlined-required"
              label="Email"
              placeholder="your email address"
              size="small"
              style={{ margin: "0.5rem" }}
            />

            <TextField
              required
              id="outlined-required"
              label="Password"
              placeholder="make a password"
              size="small"
              style={{ margin: "0.5rem" }}
            />

            <Button variant="contained" size="small" style={{marginTop:"1rem"}}>
              register
            </Button>

            <Link to= "#" style={{textDecoration:"none"}}>
            <Typography style={{marginTop:"1rem"}}>Already Registered? Login</Typography>
            </Link>
          </div>
        </form>
      </div>
    </Paper>
  );
};

export default Register;
