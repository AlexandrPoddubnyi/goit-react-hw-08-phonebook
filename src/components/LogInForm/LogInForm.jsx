import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import css from './LoginForm.module.css'

const LogInForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn({
      email: form.elements.email.value,
      password: form.elements.password.value
    }))
    form.reset()
  };

  return (
    <div className={css.div}>
      <h2 className={css.h2}>Login to your Account</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"

        />
        <input className={css.input}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="The password cannot be less than eight characters and must contain at least one number, one lowercase and one uppercase Latin letter."
        />
        <button className={css.button} type="Submit">Login</button>
      </form>
    </div>
  )
};


export default LogInForm;