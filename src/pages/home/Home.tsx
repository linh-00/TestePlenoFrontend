import Logo from "../../assets/images/Capys_Logo_6.png";
import "./style.css";
export default function HomePage() {
  return (
    <div className="container">
      <div className="fluid">
        <div className="header">
          <div className="header-container">
            <img src={Logo} alt="Logo Capys" className="logo-capys" />
            <button className="exit-button ">
              <label>Sair</label>
            </button>
          </div>
          <div className="header-container">
            <label className="title-user">Olá, Teste capys</label>
            <label className="subtitle">Desenvolvedor Front-End</label>
          </div>
        </div>
        <div className="body-container">
          <label className="infor-user">
            Que pena! Estamos em desenvolvimento :(
          </label>
          <label className="text">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </label>
        </div>
      </div>
    </div>
  );
}
