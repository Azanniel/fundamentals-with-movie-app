import { NotFoundContainer } from './styles'

export function NotFound() {
  return (
    <NotFoundContainer>
      <img src="./not-found.svg" alt="" />

      <h1>Opss...</h1>
      <p>Parece que essa página não foi encontrada</p>
    </NotFoundContainer>
  )
}
