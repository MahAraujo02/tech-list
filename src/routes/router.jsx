import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { RegisterForm } from "../components/RegisterPage";
import { Dashboard } from "../components/Dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
            <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
};
