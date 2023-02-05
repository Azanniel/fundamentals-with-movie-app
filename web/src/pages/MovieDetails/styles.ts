import styled from 'styled-components'

export const MovieDetailsContainer = styled.div``

export const CoverContainer = styled.div`
  width: 100%;
  height: 460px;

  position: relative;

  display: flex;
  align-items: flex-end;
  padding: 3rem;

  > img {
    position: absolute;
    inset: 0;
    z-index: -1;

    width: 100%;
    height: 460px;
    object-fit: cover;
    object-position: center;

    filter: brightness(74%);
  }

  > p {
    position: relative;
    z-index: 10;

    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    max-width: 50%;

    @media (max-width: 800px) {
      max-width: 90%;
    }
  }
`

export const InfoContainer = styled.div`
  margin-top: 4rem;
  padding: 0 4rem;

  font-family: 'Roboto-Mono', monospace;

  span {
    display: block;
    margin-bottom: 2rem;
  }

  span:nth-child(2) {
    line-height: 1.8;
    text-align: justify;
  }

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`
