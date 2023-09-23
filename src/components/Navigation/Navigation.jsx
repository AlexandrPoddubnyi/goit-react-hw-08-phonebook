import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const Navigation = () => {

  const { isLoggedIn } = useAuth();

  return (
    <div>
        <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">Contacts</NavLink>
        )}
        </nav>
    </div>
  )
};

export default Navigation;