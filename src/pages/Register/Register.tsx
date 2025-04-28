import Logo from "../../assets/images/Capys_Logo_6.png";
import "./style.css";
export default function RegisterPage() {
  return (
    <div className="container">
      <div className="header-container ">
        <img src={Logo} alt="Logo Capys" className="logo-capys" />
        <button className="button-back">Voltar</button>
      </div>
      <div className="fluid-container">
        <div className="text-header">
          <label className="title">Crie sua conta</label>
          <label className="subtitle">Rapido e grátis, vamos nessa</label>
        </div>
        <form>
          <label className="infor-user">
            Nome
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              name="contato"
              className="input"
            />
          </label>
          <label className="infor-user">
            Email
            <input
              type="email"
              placeholder="Digite aqui seu email"
              name="contato"
              className="input"
            />
          </label>
          <label className="infor-user">
            Senha
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              name="contato"
              className="input"
            />
          </label>
          <label className="infor-user">
            Confirmar Senha
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              name="contato"
              className="input"
            />
          </label>
          <label className="infor-user">
            Bio
            <input
              type="text"
              placeholder="Fale sobre você"
              name="contato"
              className="input"
            />
          </label>
          <label className="infor-user">
            Contato
            <input
              type="text"
              placeholder="Opção de contato"
              name="contato"
              className="input"
            />
          </label>
          <label className="infor-user">
            Selecionar Cargo
            <select
              onChange={(e) => console.log(e.target.value)}
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

          <button className="create-button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
