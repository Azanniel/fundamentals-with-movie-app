import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.violet[900]};

  padding: 0.5rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    color: ${(props) => props.theme.orange[500]};
  }

  div {
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const MenuOption = styled(NavLink)`
  width: 100%;

  border-radius: 8px;
  padding: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.orange[700]};

  font-size: 0.875rem;
  text-decoration: none;

  cursor: pointer;

  transition: background-color 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background: ${(props) => props.theme.orange[800]};
    color: ${(props) => props.theme.white};
  }

  &.active {
    > span {
      border-bottom: 1px solid ${(props) => props.theme.orange[700]};
    }
  }

  &.active:hover {
    > span {
      border-bottom: 1px solid ${(props) => props.theme.white};
    }
  }
`
