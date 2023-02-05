import { NotFoundContainer } from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <img
        src="/not-found.svg"
        alt="ilustração de um gato azul sobrevoando as nuvens, escrita do código http 404 simbolizando página não encontrada, em frente uma bola de lã azul"
      />

      <h1>Oops...</h1>
      <p>Parece que essa página não foi encontrada</p>
    </NotFoundContainer>
  )
}
