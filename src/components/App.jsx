import { Route,Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "pages/Home";
import Registration from "pages/Registratin";
import Login from "pages/Login";
import Contacts from "pages/Contacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";


export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? ("Fetching user data...") : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/registration" element={<RestrictedRoute component={Registration} redirectTo="/contacts"/> } />
          <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/contacts"/> } />
          <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo="/login"/>} />
        </Route>
      </Routes>
    </>
  );
};
