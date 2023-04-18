import type { AppProps } from 'next/app'
import { ClientContextProvider } from '@/context/clientContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientContextProvider>
      <Component {...pageProps} />
    </ClientContextProvider>
  )
}
