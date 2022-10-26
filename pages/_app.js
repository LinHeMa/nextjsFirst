import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('yes')
  return <Component {...pageProps} />
}

export default MyApp
