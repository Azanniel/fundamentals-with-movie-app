import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ThumbnailContainer = styled(NavLink)`
  width: min-content;
  padding: 4px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  text-decoration: none;
  color: ${(props) => props.theme.orange[700]};

  cursor: pointer;

  transition: transform 0.2s;

  > img {
    width: 150px;
    height: 200px;

    border-radius: 4px;
    overflow: hidden;
    outline: none;
    box-shadow: 0 0 12px 1px ${(props) => props.theme.orange[700]};

    transition: box-shadow 0.2s;

    object-fit: cover;
  }

  > p {
    font-size: 1.125rem;
    font-weight: 700;
    text-align: left;
    line-height: 0.95;
  }

  &:hover {
    transform: scale(96%);

    > img {
      box-shadow: 0 0 24px 1px ${(props) => props.theme.orange[700]};
    }
  }
`
