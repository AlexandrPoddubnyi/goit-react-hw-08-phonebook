import { useDispatch } from "react-redux";
import { registration } from "redux/auth/operations";
import css from './RegisterForm.module.css'


export const RegisterForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(registration({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value
    }))
    form.reset()
  };

  return (
    <div className={css.div}>
      <h2 className={css.h2}>Create your Account</h2>
      <form className={css.form} onSubmit={handleSubmit}>
          <input className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />
          <input className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input className={css.input}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
        <button className={css.button} type="Submit" >Register</button>
      </form>
    </div>
  )
};

