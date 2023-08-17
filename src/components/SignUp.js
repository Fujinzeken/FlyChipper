import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = ({ routing, path }) => {
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <SignUp routing={routing} path={path} />
    </div>
  );
};

export default SignUpPage;
