import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Auth =() => {

  return (
    <div className="auth-conteiner">
      {/* Register */}
      <RegisterForm />

      {/* Login */}
      <LoginForm />
    </div>
  );
}

export default Auth;
