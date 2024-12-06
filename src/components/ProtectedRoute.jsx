import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, loggedIn, ...props }) {
  return loggedIn ? element : <Navigate to="/login" />;
}
