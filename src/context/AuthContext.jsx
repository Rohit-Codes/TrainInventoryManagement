import React, { createContext, useContext, useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const createAuthContext = createContext();

export const useAuthContext = () => {
  return useContext(createAuthContext);
};

axios.defaults.baseURL = "https://intelligentmind.shop/api";
axios.defaults.headers.common["Accept"] = "*/*";
axios.defaults.headers.common["Content-Type"] = "application/json";

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const login = async (values) => {
    setLoading(true);
    const { username, password } = values;
    try {
      const response = await axios.post("/v1/auth/login", {
        username,
        password,
      });

      console.log("Login response:", response.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      localStorage.setItem("token", `${response.data.token}`);
      setToken(response.data.token);
      setLoading(false);
      navigate("/");
      notifications.show({
        title: "Welcome back!",
        message: "You have successfully logged in.",
        color: "green",
      });
    } catch (error) {
      setLoading(false);
      setError({
        loginerror: "Invalid username or password",
      });
      notifications.show({
        title: "Error!",
        message: "Invalid username or password",
        color: "red",
      });
    }
  };

  const logout = () => {
    axios.defaults.headers.common.Authorization = null;
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
    setError({});
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", `${token}`);
      setToken(token);
    }
  }, [token]);

  return (
    <createAuthContext.Provider
      value={{ login, loading, token, error, logout }}
    >
      {children}
    </createAuthContext.Provider>
  );
};

export default React.memo(AuthContext);
