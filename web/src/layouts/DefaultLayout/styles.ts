import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-areas: 'nav main';
  grid-template-columns: 100px 1fr;

  > nav {
    position: fixed;
    inset: 0 auto 0 0;
    grid-area: nav;
  }

  > div {
    grid-area: main;
    padding: 1.5rem;
  }
`
