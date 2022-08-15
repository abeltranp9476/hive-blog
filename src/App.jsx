import { useEffect } from 'react';

import InfiniteScroll from "react-infinite-scroll-component"

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import Main from './features/main/Main';
import Sidebar from './features/sidebar/Sidebar';
import Loader from './features/loader/Loader';

import { useQueryPosts } from './hooks/useQueryPosts';

function App() {

  const theme = createTheme();

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

  const { data, queryPosts, error, fetchNextPage, hasNextPage, status } = useQueryPosts()


  useEffect(() => {
    console.log(queryPosts);
  }, [queryPosts])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <InfiniteScroll
          dataLength={queryPosts ? queryPosts.data.result.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
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
