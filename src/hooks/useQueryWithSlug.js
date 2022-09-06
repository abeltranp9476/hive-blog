import { useState, useEffect } from 'react'

import { useScrollUp } from './useScrollUp'

export const useQueryWithSlug = (dataSource, slug = null) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [is404, setIs404] = useState(false);
    const [isNotResults, setIsNotResults] = useState(false)

    const getData = async (slug) => {
        setIsLoading(true)
        setIsNotResults(false)
        const content = await dataSource(slug)
        setData(content.data)
    }

    useEffect(() => {
        getData(slug)
    }, [slug])

    useEffect(() => {
        useScrollUp()

        if (data?.result?.title) {
            document.title = data?.result?.title
            setIsLoading(false)
        } else if (data?.error?.code) {
            setIs404(true)
            setIsLoading(false)
        } else if (data?.results?.length) {
            document.title = slug
            setIsLoading(false)
            console.log(data?.results?.length)
        } else if (data?.results?.length === 0) {
            setIsNotResults(true)
            setIsLoading(false)
        }


    }, [data])

    return { data, isLoading, is404, isNotResults }
}
