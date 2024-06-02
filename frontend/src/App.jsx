import "./App.css";
import Login from "./pages/login";
import PostForm from "./pages/postForm";
import Register from "./pages/register";
import TripForm from "./pages/sampleform";

function App() {
  return (
    <>
    <PostForm/>
    <TripForm/>
      {/* <div className="div1" style={{ display: "flex", flexWrap: "wrap" }}>
        <Register />
        <Login />
      </div> */}
    </>
  );
}

export default App;
