export default function LoginPage() {
  return (
    <div className="container">
      <form>
        <h1>Login</h1>
        <p>Email</p>
        <input placeholder="teste@capys.com.br" type="text" name="Name" />
        <p>Senha</p>
        <input placeholder="***********" type="password" name="Password" />
        <button>Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <button>Cadastre-se</button>
      </form>
    </div>
  );
}
