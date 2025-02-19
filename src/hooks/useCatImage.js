import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/facts'

export function useCatImage ({ fact }) {
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    getRandomImage(threeFirstWords).then((newCatImage) =>
      setCatImage(newCatImage)
    )
  }, [fact])

  return { catImage }
}
