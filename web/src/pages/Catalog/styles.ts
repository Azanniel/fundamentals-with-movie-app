import styled from 'styled-components'

export const CatalogContainer = styled.div`
  > h2 {
    color: ${(props) => props.theme.orange[700]};
  }
`

export const MoviesList = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  row-gap: 4rem;

  @media (max-width: 1270px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
