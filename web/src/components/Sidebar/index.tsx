import { House, ListPlus } from 'phosphor-react'

import { MenuOption, SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <h1>C</h1>

      <div>
        <MenuOption href="#">
          <House size={32} />

          <span>Início</span>
        </MenuOption>

        <MenuOption href="#">
          <ListPlus size={32} />

          <span>Adicionar</span>
        </MenuOption>
      </div>
    </SidebarContainer>
  )
}
