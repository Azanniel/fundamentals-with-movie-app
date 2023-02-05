import { House, ListPlus } from 'phosphor-react'

import { MenuOption, SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <h1>C</h1>

      <div>
        <MenuOption to="/" title="Início">
          <House size={32} />

          <span>Início</span>
        </MenuOption>

        <MenuOption to="/new-movie" title="Adicionar filme">
          <ListPlus size={32} />

          <span>Adicionar</span>
        </MenuOption>
      </div>
    </SidebarContainer>
  )
}
