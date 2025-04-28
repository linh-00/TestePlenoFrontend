import Logo from "../../assets/images/Capys_Logo_6.png";
import "./style.css";
export default function LoginPage() {
  return (
    <div className="container">
      <img src={Logo} alt="Logo Capys" className="logo-capys" />
      <div className="form">
        <form>
          <label className="title">Login</label>
          <label className="text-white size-12">Email</label>
          <input
            placeholder="teste@capys.com.br"
            type="text"
            name="Name"
            className="input"
          />
          <label className="text-white size-12">Senha</label>
          <input
            placeholder="●●●●●●●●●●●●●"
            type="password"
            name="Password"
            className="input"
          />
          <button name="button" className="button-login">
            Entrar
          </button>
          <label className="helper-text">Ainda não possui uma conta?</label>
          <button className="button-singup">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}
