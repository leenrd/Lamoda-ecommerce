import "./AuthPage.css";
import { app, auth } from "../../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../../context/UserContext";

const RegPage = ({
  GauthClicked,
  setGauthClicked,
  handleGAuth,
  acc,
  setAcc,
  email,
  setEmail,
  password,
  setPass,
}) => {
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const { userVerify, setUserVerification } = useUserContext();

  useEffect(() => {
    if (GauthClicked) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user.reloadUserInfo.email !== null) setAcc((prev) => !prev);
        })
        .catch((error) => {
          console.log(error.code);
        });
      setGauthClicked(false);
    }
  }, [GauthClicked, setUserVerification]);

  return (
    <>
      <main>
        {acc ? (
          <div className="okReg">
            <img src="assets/LovingDoodle.png" />
            <h1>Account created</h1>
            <button className="btn-secondary" id="loginBtn">
              <a href="/auth" className="idFOrReg">
                {" "}
                Back to Log in page
              </a>
            </button>
          </div>
        ) : (
          <div className="auth-left">
            <div className="auth-container">
              <div className="auth-heading">
                <h1>Fashion, culture & tastes</h1>
                <p>
                  Log in or Sign up to your account here. Click Log In when
                  you&apos;re done.
                </p>
              </div>
              <div className="auth-form">
                <div className="auth-input">
                  <label>Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="eg.JohnLeenard@email.com"
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="auth-input">
                  <label>Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Must be at least 8 characters"
                    required
                  />
                </div>
                <div className="auth-input">
                  <label>Retype Password</label>
                  <input
                    id="repassword"
                    type="password"
                    placeholder="Must be the same as password"
                    onChange={handlePass}
                    required
                  />
                </div>

                <span>
                  Already have an account? <a href="/auth"> Log in</a>
                </span>
                <div className="auth-cta">
                  <button
                    className="btn-secondary"
                    id="loginBtn"
                    onClick={handleGAuth}
                  >
                    Sign up
                  </button>
                </div>
              </div>
              <div className="auth-terms">
                <p>
                  Logging in means you Agree to our Privacy Policy and Terms &
                  conditions
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default RegPage;
