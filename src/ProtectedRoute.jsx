import { Navigate } from "react-router-dom";
import {useAuth} from "./contexts/AuthContext.jsx";

function ProtectedRoute({children}) {
 const {isAuthed} = useAuth();

 if (isAuthed) {
    return children;}

 return <Navigate to="/login" replace />;
}
export default ProtectedRoute;