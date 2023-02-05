import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import { Catalog } from './pages/Catalog'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
