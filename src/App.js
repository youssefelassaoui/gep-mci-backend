import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import routes from "./routes";
import Grid from "@mui/material/Grid";
import ToolbarComponent from "./components/Toolbar/Toolbar"; // Correct import for the Navbar

// Create SidebarContext
export const SidebarContext = createContext();

function Layout() {
  const location = useLocation(); // Get the current location
  const [expanded, setExpanded] = useState(true);

  // Check if the current route is the "settings" route
  const isSettingsRoute = location.pathname === "/settings";

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <Grid
        container
        sx={{ height: "100vh", overflow: "hidden", flexDirection: "column" }}
      >
        {/* Navbar */}
        <Grid item sx={{ width: "100%" }}>
          <ToolbarComponent />
        </Grid>

        {/* Main Content */}
        <Grid
          item
          sx={{
            flex: 1,
            overflow: "auto",
            padding: isSettingsRoute ? 0 : 2,
          }}
        >
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Grid>
      </Grid>
    </SidebarContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
