import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Find from "./pages/Find";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  
  const darktheme = createTheme({
    palette: {
      mode: 'dark', // Set the theme mode to dark
    },
  });

  return (
    <Router>
      <ThemeProvider theme={darktheme}>
        <CssBaseline />
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/find" element={<Find />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
