import React from 'react';
import styles from '../Login/LoginForm.module.css';
import loginImg from '../../Assets/login.jpg';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={styles.loginFormSection}>
      <div className="login-image">
        <img src={loginImg} />
      </div>
      <div className="form-box">
        <form action="" onSubmit={handleLogin}>
          <Input label="Úsuario" name="username" type="text" {...username} />
          <Input label="Senha" name="password" type="password" {...password} />
          <Button>Entrar</Button>
        </form>
        <Link to="create-account">Criar Conta</Link>
      </div>
    </section>
  );
};

export default LoginForm;
