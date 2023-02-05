import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Catalog } from './pages/Catalog'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Catalog />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
