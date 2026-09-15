function Card({ nome, foto }) {
  // Se o caminho da foto estiver errado ou vazio, mostramos as iniciais do atleta.
  const iniciais = nome
    .split(' ')
    .map((palavra) => palavra[0])
    .slice(0, 2)
    .join('')

  function usarFallback(evento) {
    evento.target.style.display = 'none'
    evento.target.nextElementSibling.style.display = 'flex'
  }

  return (
    <article className="card">
      <div className="card__moldura">
        <img className="card__foto" src={foto} alt={nome} onError={usarFallback} />
        <span className="card__iniciais">{iniciais}</span>
      </div>
      <h3 className="card__nome">{nome}</h3>
    </article>
  )
}

export default Card
