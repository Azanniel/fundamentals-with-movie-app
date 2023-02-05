import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Catalog } from './pages/Catalog'
import { MovieDetails } from './pages/MovieDetails'
import { NewMovie } from './pages/NewMovie'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/new-movie" element={<NewMovie />} />
      </Route>

      <Route path="/movie/:id" element={<MovieDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
