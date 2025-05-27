import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="grainOverlay" />
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
