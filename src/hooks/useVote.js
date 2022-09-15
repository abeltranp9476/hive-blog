import React from 'react'

import { setVote } from '../pages/post/postApi'

export const useVote = () => {
    const handleVote = async (data) => {
        alert('Vas a votar ahora!')
        const response = await setVote(data)
    }

    return { handleVote }
}
