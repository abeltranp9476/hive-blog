import React, { useState, useEffect } from 'react'
import { useScrollUp } from './useScrollUp'

export const useQueryWithSlug = (dataSource, slug = null) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [is404, setIs404] = useState(false);
    const [isNotResults, setIsNotResults] = useState(false)

    const getData = async (slug) => {
        const content = await dataSource(slug)
        setData(content.data)
    }

    useEffect(() => {
        getData(slug)
    }, [slug])

    useEffect(() => {
        if (data?.result?.title) {
            useScrollUp()
            setIsLoading(false)
            document.title = data?.result?.title
        } else if (data?.error?.code) {
            setIsLoading(false)
            setIs404(true)
        }
    }, [data])

    return { data, isLoading, is404, isNotResults }
}
