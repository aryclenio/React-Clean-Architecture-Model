import Footer from '@/presentation/components/Footer/Footer';
import FormStatus from '@/presentation/components/FormStatus/FormStatus';
import Input from '@/presentation/components/Input/Input';
import LoginHeader from '@/presentation/components/LoginHeader/LoginHeader';
import React from 'react';
import Styles from './Login.styles.scss';

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form} action="" method="get">
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
