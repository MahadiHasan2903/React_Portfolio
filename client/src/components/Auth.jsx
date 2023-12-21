import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    const isTokenExpired = () => {
      const expirationTime = localStorage.getItem("expirationTime");
      return Date.now() > expirationTime;
    };

    const redirectToLogin = () => {
      window.location.href = "/login";
    };

    if (isTokenExpired()) {
      redirectToLogin();
    }
  }, []);

  return <div>Auth</div>;
};

export default Auth;
