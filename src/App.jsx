import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { catImage } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} alt={`Image extracted using the first word for ${fact}`} />}
    </main>
  )
}
