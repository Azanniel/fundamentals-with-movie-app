import { CoverContainer, InfoContainer, MovieDetailsContainer } from './styles'

export function MovieDetails() {
  return (
    <MovieDetailsContainer>
      <CoverContainer>
        <img src="https://picsum.photos/800/500 " alt="" />

        <p>O Melhor filme do ano</p>
      </CoverContainer>

      <InfoContainer>
        <span>Sinopse e Info</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          asperiores cum nobis eos mollitia quaerat, obcaecati laboriosam
          pariatur ducimus dignissimos. Esse dolorem eligendi a. Quod nam quasi
          corporis unde laborum.
        </span>
      </InfoContainer>
    </MovieDetailsContainer>
  )
}
