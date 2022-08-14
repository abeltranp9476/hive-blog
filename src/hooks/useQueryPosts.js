import { useMemo, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from '../api/postApi';

export const useQueryPosts = () => {
    const maxPost = 10;

    const params = {
        start: 0,
        limit: maxPost
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        status,
    } = useInfiniteQuery(
        ['queryPosts'],
        ({ pageParam = 0 }) => fetchPosts(params),
        {
            getNextPageParam: (lastPage, pages) => pages.length * maxPost - 1,
        }
    )

    const queryPosts = useMemo(() => data?.pages.reduce((prev, page) => {
        return {
            data: {
                result: [...prev.data.result, ...page.data.result],
            }
        }
    }), [data])


    return {
        error,
        fetchNextPage,
        status,
        hasNextPage,
        queryPosts,
    }
}
