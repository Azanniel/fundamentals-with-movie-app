import styled from 'styled-components'

export const NewMovieContainer = styled.div`
  h2 {
    color: ${(props) => props.theme.orange[700]};
  }

  form {
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      gap: 4rem;
    }

    footer {
      display: flex;
      justify-content: flex-end;
    }

    @media (max-width: 660px) {
      > div {
        align-items: center;
        flex-direction: column;
      }
    }
  }
`

export const ImagePreviewContainer = styled.div`
  width: 150px;
  height: 200px;

  background: ${(props) => props.theme.blue[700]};

  border-radius: 4px;
  overflow: hidden;
  outline: none;
  box-shadow: 0 0 12px 1px ${(props) => props.theme.orange[700]};

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  > input {
    position: absolute;
    inset: 0;

    cursor: pointer;
    opacity: 0;
  }
`
export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const FieldsContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media (max-width: 660px) {
    width: 100%;
  }
`

export const FieldTitle = styled.input`
  background: transparent;
  border: 2px solid ${(props) => props.theme.orange[700]};
  border-radius: 4px;

  color: ${(props) => props.theme.white};
  outline: none;

  padding: 1rem;
`

export const FieldDescription = styled.textarea`
  background: transparent;
  border: 2px solid ${(props) => props.theme.orange[700]};
  border-radius: 4px;

  color: ${(props) => props.theme.white};
  outline: none;

  min-height: 150px;
  padding: 1rem;

  resize: none;
`

export const SubmitButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 4px;

  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.orange[700]};
  color: ${(props) => props.theme.blue[700]};

  cursor: pointer;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.orange[600]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
