
const Form = () => {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" />
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" placeholder="Insira seu e-mail" />
      </div>
      <div>
        <a>Leia os termos.</a>
        <div>
          <input type="checkbox"/>
          <label>Concordo com os termos.</label>
        </div>
      </div>
      <button>Cadastrar</button>
    </form>
  )
}

export default Form