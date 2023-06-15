import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Find from "./pages/Find";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepOrange } from "@mui/material/colors";


function App() {

  
  const darktheme = createTheme({
    palette: {
      mode: 'dark',
    }
  });

  return (
    <Router>
      <ThemeProvider theme={darktheme}>
        <CssBaseline />
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/find" element={<Find />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
