import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'

// Dados mocados (simulando o retorno da API da liga)
const jogadoresIniciais = [
  { id: 1, nome: 'LeBron James', foto: '/jogadores/lebron-james.jpg' },
  { id: 2, nome: 'Stephen Curry', foto: '/jogadores/stephen-curry.jpg' },
  { id: 3, nome: 'Giannis Antetokounmpo', foto: '/jogadores/giannis-antetokounmpo.jpg' },
  { id: 4, nome: 'Luka Dončić', foto: '/jogadores/luka-doncic.jpg' },
  { id: 5, nome: 'Nikola Jokić', foto: '/jogadores/nikola-jokic.jpg' },
  { id: 6, nome: 'Jayson Tatum', foto: '/jogadores/jayson-tatum.jpg' },
]

function App() {
  const [jogadores, setJogadores] = useState([])

  // Carrega a lista assim que a tela é montada
  useEffect(() => {
    setJogadores(jogadoresIniciais)
  }, [])

  return (
    <div className="app">
      <Header />

      <main className="galeria">
        {jogadores.map((jogador) => (
          <Card key={jogador.id} nome={jogador.nome} foto={jogador.foto} />
        ))}
      </main>
    </div>
  )
}

export default App
