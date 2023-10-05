import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import css from './UserMenu.module.css'


export const UserMenu = () => {

  const dispatch = useDispatch()
  const { user } = useAuth()
  
  const handleLogOut = () => dispatch(logout())

  return (
    <div className={css.div}>
      <svg className={css.icon} role="img" aria-label="user" >
        <use href="../../images/icons.svg#icon-user-check"  width="16" height="16"></use>
      </svg>
      <p className={css.p}>
        
        {user.name}
      </p>
      <svg className={css.icon} width="16" height="16" >
        <use href="../../images/symbols.svg#icon-cross" ></use>
      </svg>
      <button className={css.button} type="button" onClick={handleLogOut}>Logout</button>
    </div>
  )
};