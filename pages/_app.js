import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from '../components/Navbar'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/404', '/', '/register', '/faq', '/about']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <Navigation />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp
