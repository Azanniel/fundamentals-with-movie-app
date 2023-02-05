import styled from 'styled-components'

export const ThumbnailContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  background: transparent;
  border: none;
  color: ${(props) => props.theme.orange[700]};

  cursor: pointer;

  > img {
    width: 150px;
    height: 200px;

    border-radius: 4px;
    overflow: hidden;
    outline: none;
    box-shadow: 0 0 12px 1px ${(props) => props.theme.orange[700]};
  }

  > p {
    font-size: 1.125rem;
    font-weight: 700;
  }
`
