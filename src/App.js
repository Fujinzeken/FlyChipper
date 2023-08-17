import "./App.css";
import SignInPage from "./components/SignIn";
import SignUpPage from "./components/SignUp";
import TopContent from "./components/TopContent";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ProviderRoutes() {
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/sign-in/*"
          element={<SignInPage routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUpPage routing="path" path="/sign-up" />}
        />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <TopContent />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  document.title = "FlyCheaper - Unbielievably affordable air travel";
  return (
    <div>
      <Router>
        <ProviderRoutes />
      </Router>
    </div>
  );
}

export default App;
