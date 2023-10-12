import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import css from './UserMenu.module.css'
import sprite from "../../images/icons.svg"

export const UserMenu = () => {

  const dispatch = useDispatch()
  const { user } = useAuth()
  
  const handleLogOut = () => dispatch(logout())

  return (
    <div className={css.div}>
      <p className={css.p}>
        <svg className={css.icon} role="img" aria-label="user" >
          <use href={sprite + "#icon-user-check"} width="16" height="16"></use>
        </svg>
        {user.name}
      </p>
      <button className={css.button} type="button" onClick={handleLogOut}>Logout</button>
    </div>
  )
};