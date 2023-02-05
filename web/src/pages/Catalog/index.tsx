import { ThumbnailMovie } from '../../components/ThumbnailMovie'
import { CatalogContainer, MoviesList } from './styles'

export function Catalog() {
  return (
    <CatalogContainer>
      <h2>Filmes no catálogo</h2>

      <MoviesList>
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
        <ThumbnailMovie />
      </MoviesList>
    </CatalogContainer>
  )
}
