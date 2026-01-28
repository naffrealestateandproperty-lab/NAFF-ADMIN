import { createContext, useState } from "react";
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const signUp = async ({email,Password}) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch("http://localhost:5174/api/auth/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({email,Password}),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setUser(data.user);
  //       setToken(data.token);
  //       localStorage.setItem("token", data.token);
  //     } else {
  //       setError(data.message || "Signup failed");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const signIn = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:5174/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        setError(data.message || "Signin failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};