const CAT_ENDPOINT_IMAGE_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_IMAGE_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getRandomImage = async (threeFirstWords) => {
  const res = await fetch(
    `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`
  )
  const response = await res.json()
  const { url } = response
  return url
}
