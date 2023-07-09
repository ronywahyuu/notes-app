import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import NotesPage from "./pages/NotesPage";
import CreateNote from "./pages/CreateNote";
import DetailNote from "./pages/DetailNote";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import NotFound from "./components/404/404";
import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);

  const [locale, setLocale] = useState(() => {
    const localLocale = localStorage.getItem("locale");
    return localLocale ? localLocale : "id";
  });
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#f3f3f3" : "#1f1f1f";

    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      localStorage.setItem("locale", prevLocale === "id" ? "en" : "id");
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      localStorage.setItem("theme", prevTheme === "light" ? "dark" : "light");
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) return null;

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage successLogin={onLoginSuccess} />}
            />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <Routes>
          <Route
            path="/"
            element={<MainLayout logout={onLogout} user={authedUser} />}
          >
            <Route path="active" element={<NotesPage />} />
            <Route path="active/:noteid" element={<DetailNote />} />
            <Route path="archived/:noteid" element={<DetailNote />} />
            <Route path="archived" element={<NotesPage />} />
            <Route path="create" element={<CreateNote />} />
            <Route path="*" element={<NotFound page />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
};

export default App;
