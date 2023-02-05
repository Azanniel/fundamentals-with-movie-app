import { MovieCatalogDTO } from '../../dtos/movie-catalog-dto'
import { ThumbnailContainer } from './styles'

interface ThumbnailMovieProps {
  data: MovieCatalogDTO
}

export function ThumbnailMovie(props: ThumbnailMovieProps) {
  const movie = props.data
  const urlStaticToImageMovie = 'http://192.168.1.8:3000/static'

  return (
    <ThumbnailContainer to={`/movie/${movie.id}`}>
      <img src={`${urlStaticToImageMovie}/${movie.cover}`} alt={movie.title} />

      <p>{movie.title}</p>
    </ThumbnailContainer>
  )
}
