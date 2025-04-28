import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Capys_Logo_6.png";
import "./style.css";
export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [bio, setBio] = useState("");
  const [contato, setContato] = useState("");
  const [cargoSelecionado, setCargoSelecionado] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header-container ">
        <img src={Logo} alt="Logo Capys" className="logo-capys" />
        <button
          className="button-back"
          onClick={(ev) => {
            ev.preventDefault();
            navigate("/");
          }}
        >
          Voltar
        </button>
      </div>
      <div className="fluid-container">
        <div className="text-header">
          <label className="title">Crie sua conta</label>
          <label className="subtitle">Rapido e grátis, vamos nessa</label>
        </div>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            console.log("Requisição de Cadastrar-se");
            const request = {
              Name: nome,
              Email: email,
              Password: senha,
              ConfirmPassword: confirmarSenha,
              Bio: bio,
              contact: contato,
              role: cargoSelecionado,
            };
            alert(`Requisição de Cadastrar-se ${JSON.stringify(request)}`);
          }}
        >
          <label className="infor-user-signUp">
            Nome
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              name="contato"
              className="input"
              onChange={(event) => {
                setNome(event.target.value);
              }}
            />
          </label>
          <label className="infor-user-signUp">
            Email
            <input
              type="email"
              placeholder="Digite aqui seu email"
              name="contato"
              className="input"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <label className="infor-user-signUp">
            Senha
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              name="contato"
              className="input"
              onChange={(event) => {
                setSenha(event.target.value);
              }}
            />
          </label>
          <label className="infor-user-signUp">
            Confirmar Senha
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              name="contato"
              className="input"
              onChange={(event) => {
                setConfirmarSenha(event.target.value);
              }}
            />
          </label>
          <label className="infor-user-signUp">
            Bio
            <input
              type="text"
              placeholder="Fale sobre você"
              name="contato"
              className="input"
              onChange={(event) => {
                setBio(event.target.value);
              }}
            />
          </label>
          <label className="infor-user-signUp">
            Contato
            <input
              type="text"
              placeholder="Opção de contato"
              name="contato"
              className="input"
              onChange={(event) => {
                setContato(event.target.value);
              }}
            />
          </label>
          <label className="infor-user-signUp">
            Selecionar Cargo
            <select
              onChange={(event) => {
                setCargoSelecionado(event.target.value);
              }}
              style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
              className="input"
            >
              <option value="">Selecione um cargo</option>
              <option value="Desenvolvedor Front-End">
                Desenvolvedor Front-End
              </option>
              <option value="Desenvolvedor Back-End">
                Desenvolvedor Back-End
              </option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Product Manager">Product Manager</option>
            </select>
          </label>

          <button className="create-button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
