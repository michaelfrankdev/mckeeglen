import Navigation from '../components/Navbar'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import PrimaryHeader from '../components/Header'
import PrimaryFooter from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

const noAuthRequired = ['/404', '/', '/register', '/faq', '/about']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <Navigation />
      <PrimaryHeader />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      <PrimaryFooter />
    </AuthContextProvider>
  )
}

export default MyApp
