import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../lib/api'

import {
  FieldDescription,
  FieldsContainer,
  FieldTitle,
  ImagePreview,
  ImagePreviewContainer,
  NewMovieContainer,
  SubmitButton,
} from './styles'

export function NewMovie() {
  const [previewImage, setPreviewImage] = useState('')
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  function handleSelectedImage(event: ChangeEvent<HTMLInputElement>) {
    setSelectedImage(event.target.files?.item(0) || null)
  }

  async function handleCreateNewMovie(event: FormEvent) {
    event.preventDefault()

    if (!selectedImage) {
      return false
    }

    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('cover', selectedImage)

      await api.post('/movies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      alert('Filme adicionado no catálogo')

      navigate('/')
    } catch (error) {
      console.log(error)
      alert('Não foi possível criar o filme')
    }
  }

  useEffect(() => {
    if (!selectedImage) {
      return setPreviewImage('')
    }

    const objectUrl = URL.createObjectURL(selectedImage)
    setPreviewImage(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedImage])

  let isInvalidFormToSubmit = true

  if (selectedImage && title && description) {
    isInvalidFormToSubmit = false
  }

  return (
    <NewMovieContainer>
      <h2>Adicione um filme ao catálogo</h2>

      <form onSubmit={handleCreateNewMovie}>
        <div>
          <ImagePreviewContainer>
            {selectedImage ? (
              <ImagePreview src={previewImage} alt="" />
            ) : (
              <span>Capa da imagem</span>
            )}

            <input
              type="file"
              name="cover"
              onChange={handleSelectedImage}
              accept="image/*"
            />
          </ImagePreviewContainer>

          <FieldsContainer>
            <FieldTitle
              type="text"
              name="title"
              placeholder="Qual o nome do filme?"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />

            <FieldDescription
              name="description"
              placeholder="Nos conte mais sobre o filme com um sinopse"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FieldsContainer>
        </div>

        <footer>
          <SubmitButton type="submit" disabled={isInvalidFormToSubmit}>
            Adicionar
          </SubmitButton>
        </footer>
      </form>
    </NewMovieContainer>
  )
}
