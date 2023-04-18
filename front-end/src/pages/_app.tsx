import type { AppProps } from 'next/app'
import { ServiceContextProvider } from '@/context/serviceContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ServiceContextProvider>
      <Component {...pageProps} />
    </ServiceContextProvider>
  )
}
