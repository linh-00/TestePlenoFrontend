import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Capys_Logo_6.png";
import { ResponseLogin } from "../../Mocks/login";
import "./style.css";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src={Logo} alt="Logo Capys" className="logo-capys" />
      <div className="form">
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();
            if (email != "" && password != "") {
              const response = await ResponseLogin({
                Email: email,
                Senha: password,
              });
              if (response.status == 200) {
                navigate("/home");
              }
            } else {
              alert("Digite email e senha");
            }
          }}
        >
          <label className="title">Login</label>
          <label className="text-white size-12">Email</label>
          <input
            placeholder="teste@capys.com.br"
            type="text"
            name="email"
            className="input"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className="text-white size-12">Senha</label>
          <input
            placeholder="●●●●●●●●●●●●●"
            type="password"
            name="Password"
            className="input"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button name="button" type="submit" className="button-login">
            Entrar
          </button>
          <label className="helper-text">Ainda não possui uma conta?</label>
          <button
            className="button-singup"
            type="button"
            onClick={(ev) => {
              ev.preventDefault();
              navigate("/signUp");
            }}
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
}
