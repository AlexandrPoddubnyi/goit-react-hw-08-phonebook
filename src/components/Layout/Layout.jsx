import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "components/AppBar/AppBar";
import css from './Layout.module.css'


const Layout = () => {
  return (
    <div className={css.div}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
};


export default Layout;    