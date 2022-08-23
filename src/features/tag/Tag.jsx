import React from 'react'
import { useParams } from 'react-router-dom';

export const Tag = () => {
    const { tag }= useParams();

  return (
    <div>Ested esta viendo: {tag}</div>
  )
}
