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
        ({ pageParam = 9 }) => {
            return fetchPosts({ start: pageParam, limit: maxPost})
        },
        {
            getNextPageParam : (lastPage, pages) => {
                const page = (pages.length + 1) * maxPost - 1;                

                if (pages[pages?.length - 1] ?.data?.result?.length !== 0) {

                    return page;
                }

                return false;              
            },
        }
    )

    const queryPosts = useMemo(() => data?.pages?.reduce((prev, page) => {
    return {
        data: {
            result: [
                ...prev.data.result,
                ...page.data.result.reverse()
            ]
        }
    }
    }), [data]);


    return {
        error,
        fetchNextPage,
        status,
        hasNextPage,
        queryPosts,
        data,
    }
}
