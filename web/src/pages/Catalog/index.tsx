import { useEffect, useState } from 'react'

import { ThumbnailMovie } from '../../components/ThumbnailMovie'
import { MovieCatalogDTO } from '../../dtos/movie-catalog-dto'
import { api } from '../../lib/api'

import { CatalogContainer, EmptyMovieList, MoviesList } from './styles'

export function Catalog() {
  const [movies, setMovies] = useState<MovieCatalogDTO[]>([])

  async function fetchMovies() {
    try {
      const response = await api.get('/movies')
      const { movies: moviesData } = response.data

      console.log(moviesData)
      setMovies(moviesData)
    } catch (error) {
      console.log(error)
      alert('Não foi possível buscar os filmes')
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <CatalogContainer>
      <h2>Filmes no catálogo</h2>

      {movies.length === 0 && (
        <EmptyMovieList>
          Não existem filmes disponíveis no catálogo
        </EmptyMovieList>
      )}

      {movies.length > 0 && (
        <MoviesList>
          {movies.map((movie) => {
            return <ThumbnailMovie key={movie.id} data={movie} />
          })}
        </MoviesList>
      )}
    </CatalogContainer>
  )
}
