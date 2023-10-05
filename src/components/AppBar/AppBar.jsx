import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import css from './App.module.css'




const AppBar = () => {

  const {isLoggedIn} = useAuth();

  return (
    <div>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
      </header>
    </div>
  )
};

export default AppBar;

