import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import Featured from './features/featured/Featured';

import { useQueryPosts } from './hooks/useQueryPosts';
import {selectProfile, getProfile} from './features/profile/profileSlice';

function App() {

  const theme = createTheme();
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

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
    dispatch(getProfile());
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header title="Feed pricipal" sections={sections}/>

        <InfiniteScroll
          dataLength={queryPosts ? queryPosts.data.result.length : 0}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Loader />}
        >
          <main>
          <Featured 
          image={profile?.user?.metadata?.profile?.cover_image}
          title= {'Blog de ' + profile?.user?.metadata?.profile?.name}
          />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title = "Desde Hive.io" posts = {queryPosts} />
            <Sidebar title="Acerca de"/>
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
