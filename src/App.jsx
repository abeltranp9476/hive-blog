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
  const [queryPost, setQueryPost] = useState(0);

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
    console.log(params);
    const response = await fetchPosts(params);
    setPosts(response.data.result);
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery(
    ['posts'],
    async ({ pageParam = 0 }) => await getPosts({ start: pageParam, limit: maxPost }),
    {
      getNextPageParam: () => {
        return 9;
      }
    }
  )

  useEffect(() => {
    console.log(data);
  }, [data])



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
          hasMore={!!hasNextPage}
          loader={<Loader />}
        >
          <main>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="Publicaciones" posts={posts} />
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
