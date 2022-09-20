import { useState } from 'react'

import { setVote } from '../pages/post/postApi'

export const useVote = () => {
    const [voteState, setVoteState] = useState(false)
    const [weight, setWeight] = useState(50)
    const [isLoading, setIsLoading] = useState(false)

    const handleShowVote = () => {
        setVoteState(true)
    }

    const handleCloseVote = () => {
        setVoteState(false)
    }

    const handleVote = async (data) => {
        setIsLoading(true)
        const response = await setVote(data)
        setIsLoading(false)
        setVoteState(false)
    }

    const handleVoteValue = (event, value) => {
        setWeight(value)
    }

    return { voteState, handleShowVote, handleCloseVote, handleVote, weight, handleVoteValue, isLoading }
}
