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
          />
          <input className={css.input}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          /> 
        <button className={css.button} type="Submit">Login</button>
      </form>
    </div>
  )
};


export default LogInForm;