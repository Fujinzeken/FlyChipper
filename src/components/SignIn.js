import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = ({ routing, path }) => {
  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <SignIn routing={routing} path={path} />
    </div>
  );
};

export default SignInPage;
