import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        )}
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
