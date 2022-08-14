import { useState, useEffect, useMemo } from 'react';

import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery } from "@tanstack/react-query";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import Main from './features/main/Main';
import Sidebar from './features/sidebar/Sidebar';
import Loader from './features/loader/Loader';

import { fetchPosts } from './api/postApi';
import { useCharacter } from './hooks/useCharacter';

function App() {

  const theme = createTheme();
  const [posts, setPosts] = useState([]);
  const maxPost = 10;

  let page = 0;

  const params = {
    start: 0,
    limit: maxPost
  }

  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];


  const getPosts = async (params) => {
    const response = await fetchPosts(params);
    setPosts(response.data);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery(
    ['posts'],
    ({ pageParam = 0 }) => fetchPosts(params),
    {
      getNextPageParam: (lastPage, pages) => pages.length * maxPost - 1,
    }
  )

  const queryPosts = useMemo(() => data?.pages.reduce((prev, page) => {
    return {
      results: [...prev.data.result, ...page.data.result]
    }
  }), [data, posts])


  useEffect(() => {
    getPosts(params);
  }, [])

  if (!posts) return false;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <InfiniteScroll
          dataLength={10}
          next={() => fetchNextPage()}
          hasMore={true}
          loader={<Loader />}
        >
          <main>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="Publicaciones" posts={queryPosts} />
              <Sidebar
                title="Acerca de"
                description="Esto es una descripcion"
              />
            </Grid>
          </main>
        </InfiniteScroll>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default App
