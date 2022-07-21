import Head from 'next/head'
import PrimaryFooter from './Footer'
import PrimaryHeader from './Header'
import Navigation from './Navbar'

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico" />
      </Head>
      <Navigation />
      <PrimaryHeader />
      {children}
      <PrimaryFooter />
    </>
  )
}

export default PrimaryLayout
