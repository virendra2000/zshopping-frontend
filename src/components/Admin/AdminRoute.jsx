import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("admin");

  if (isAdmin === "true") {
    return children;
  }

  return (
    <h1 className="text-center mt-20 text-3xl">
      Restricted Page <br /> Please contact Administrator
    </h1>
  );
};

export default AdminRoute;