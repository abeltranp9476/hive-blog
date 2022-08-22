import React from 'react'
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client'
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
