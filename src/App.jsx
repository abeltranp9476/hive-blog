import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'


import InfiniteScroll from "react-infinite-scroll-component"
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Stack from '@mui/material/Stack';

import { Header } from './components/header'
import { Footer } from './components/footer'
import { Main } from './components/main'
import { Sidebar } from './components/sidebar'
import { Loader } from './components/loader'
import { Featured } from './components/featured'
import { Post } from './pages/post'
import { Tag } from './pages/tag'

import { useQueryPosts } from './hooks/useQueryPosts'
import { selectProfile, getProfile } from './pages/profile/profileSlice'
import { categories } from './api/categoriesApi'
import { Error404 } from './pages/error404'
import { fetchPost } from './pages/post/postApi'
import { Sign } from './pages/sign'
import { useSign } from './hooks/useSign'
import { Logout } from './pages/logout'

function App() {
  const theme = createTheme()
  const profile = useSelector(selectProfile)
  const { userName } = useSign()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingPosts, setIsLoadingPosts] = useState(true)
  const location = useLocation()

  //const PostWithAnything = anythinWithSuscription(Post, fetchPost)

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  const { data, queryPosts, error, fetchNextPage, hasNextPage, status } = useQueryPosts()

  useEffect(() => {
    if (profile?.user?.metadata?.profile?.name) {
      setIsLoading(false)
    }
  }, [profile])

  useEffect(() => {
    if (data) setIsLoadingPosts(false)
  }, [data])

  useEffect(() => {
    if (location.pathname === '/' && profile?.user?.metadata?.profile?.name) document.title = 'Blog de ' + profile?.user?.metadata?.profile?.name
  }, [location, profile])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Container maxWidth="lg">
            <Header title="Feed pricipal" sections={categories} userName={userName} />

            <Routes>

              <Route path="/" element={
                <InfiniteScroll
                  dataLength={queryPosts ? queryPosts.data.result.length : 0}
                  next={() => fetchNextPage()} hasMore={!!hasNextPage}
                  loader={<Loader />
                  }>
                  <main>
                    <Featured image={profile?.user?.metadata?.profile?.cover_image} title={'Blog de ' + profile?.user?.metadata?.profile?.name} />
                    <Grid container={true} spacing={5} sx={{ mt: 3 }}>
                      <Main title="Desde Hive.io"
                        isLoading={isLoadingPosts}
                        posts={queryPosts}
                      />
                      <Sidebar title="Acerca de" />
                    </Grid>
                  </main>
                </InfiniteScroll>
              } />

              <Route path="/sign" element={
                <main>
                  <Grid container={true} spacing={5} sx={{ mt: 3 }}>
                    <Sign />
                    <Sidebar title="Acerca de" />
                  </Grid>
                </main>
              }
              />

              <Route path="/logout" element={
                <main>
                  <Grid container={true} spacing={5} sx={{ mt: 3 }}>
                    <Logout />
                    <Sidebar title="Acerca de" />
                  </Grid>
                </main>
              }
              />

              <Route path="/tag/:tag" element={
                <main>
                  <Grid container={true} spacing={5} sx={{ mt: 3 }}>
                    <Tag />
                    <Sidebar title="Acerca de" />
                  </Grid>
                </main>
              }
              />

              <Route path="/:slug" element={
                <main>
                  <Grid container={true} spacing={5} sx={{ mt: 3 }}>
                    <Post />
                    <Sidebar title="Acerca de" />
                  </Grid>
                </main>
              } />

              <Route path="*" element={<Error404 />} />

            </Routes>

          </Container>
          <Footer
            title={'Blog de ' + profile?.user?.metadata?.profile?.name}
            description={<p>Creado en <strong>ReactJs</strong> sobre <strong>Hive</strong> BlockChain</p>}
          />
        </>
      )}
    </ThemeProvider>
  )
}

export default App;