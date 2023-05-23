import { LayoutMain } from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutMain title='list-pokemon'>
     <Component {...pageProps} />
  </LayoutMain>
  )
  
  
 
}
