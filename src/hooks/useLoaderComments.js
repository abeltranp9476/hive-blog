import { useState } from 'react'

export const useLoaderComments = (dataSource, slug = null) => {
  const [comments, setComments] = useState([])
  const [isLoadingComments, setIsLoadingComments] = useState(false)

  const handleLoadComments = async () => {
    setIsLoadingComments(true)
    const content = await dataSource(slug)
    setComments(content.data.result)
    setIsLoadingComments(false)
  }

  return { comments, isLoadingComments, handleLoadComments }

}