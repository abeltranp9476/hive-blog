import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
