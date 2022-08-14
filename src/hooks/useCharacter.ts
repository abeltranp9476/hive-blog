import {useMemo, useEffect} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {ResponseAPI} from "../interface";

export const useCharacter = () => {

    const {
        data,
        error,
        fetchNextPage,
        status,
        hasNextPage
    } = useInfiniteQuery(['characters'], ({
        pageParam = 1
    }) => fetch(`https://rickandmortyapi.com/api/character/?page=${pageParam}`).then(res => res.json()), {
        getNextPageParam: (lastPage : ResponseAPI) => {

            const previousPage = lastPage.info.prev ? + lastPage.info.prev.split('=')[1] : 0
            const currentPage = previousPage + 1;

            if (currentPage === lastPage.info.pages) 
                return false;
            


            return currentPage + 1;
        }
    })

    useEffect(() => {
        console.log(data);
    }, [data])


    return {
        error,
        fetchNextPage,
        status,
        hasNextPage,
        // characters,
        data
    }
}