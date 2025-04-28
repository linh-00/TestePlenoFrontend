export default function RegisterPage() {
  return (
    <div>
      <div>
        <h3>Crie sua conta</h3>
        <h5>Rapido e grátis, vamos nessa</h5>

        <form>
          <label>
            Nome
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              name="contato"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Digite aqui seu email"
              name="contato"
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              name="contato"
            />
          </label>
          <label>
            Confirmar Senha
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              name="contato"
            />
          </label>
          <label>
            Bio
            <input type="text" placeholder="Fale sobre você" name="contato" />
          </label>
          <label>
            Contato
            <input type="text" placeholder="Opção de contato" name="contato" />
          </label>
          <label>
            Selecionar Cargo
            <select
              onChange={(e) => console.log(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "5px" }}
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

          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
