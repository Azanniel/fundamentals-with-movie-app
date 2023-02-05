import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <nav>
        <Sidebar />
      </nav>

      <div>
        <Outlet />
      </div>
    </LayoutContainer>
  )
}
