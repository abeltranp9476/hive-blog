import { useMemo, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from '../api/postApi';

export const useQueryPosts = () => {
    const maxPost = 10;

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        status,
    } = useInfiniteQuery(
        ['queryPosts'],
        ({ pageParam = 0 }) => {
            console.log(pageParam);
            return fetchPosts({ start: pageParam, limit: maxPost - 1 })
        },
        {
            getNextPageParam: (lastPage, pages) => {
                return (pages.length) * maxPost - 2;
            },
        }
    )

    const queryPosts = useMemo(() => data?.pages?.reduce((prev, page) => {
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
        data,
    }
}
