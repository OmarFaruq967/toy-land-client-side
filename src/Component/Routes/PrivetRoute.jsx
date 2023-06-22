import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Blocks } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen -mt-5">
        <Blocks
          visible={true}
          height={80}
          width={80}
          ariaLabel="blocks-loading"
          wrapperClassName="blocks-wrapper"
        />
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state = {{from:location}} to="/login" replace/>;
};

export default PrivetRoute;
