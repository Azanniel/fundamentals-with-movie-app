import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCatalogDTO } from '../../dtos/movie-catalog-dto'
import { api } from '../../lib/api'

import { CoverContainer, InfoContainer, MovieDetailsContainer } from './styles'

type ParamsProps = {
  id: string
}

interface MovieProps extends MovieCatalogDTO {
  description: string
}

export function MovieDetails() {
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps)

  const { id } = useParams() as ParamsProps

  async function fetchDetailsMovie() {
    const { data } = await api.get(`/movies/${id}`)
    setMovie(data.movie)
  }

  useEffect(() => {
    fetchDetailsMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <MovieDetailsContainer>
      <CoverContainer>
        <img src={`http://192.168.1.8:3000/static/${movie.cover}`} alt="" />

        <p>{movie.title}</p>
      </CoverContainer>

      <InfoContainer>
        <span>Sinopse e Info</span>
        <span>{movie.description}</span>
      </InfoContainer>
    </MovieDetailsContainer>
  )
}
