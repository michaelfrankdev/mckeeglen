import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import PrimaryLayout from '../components/Layout/Primary'
import ProtectedRoute from '../components/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

const noAuthRequired = ['/404', '/', '/register', '/faq', '/about']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <PrimaryLayout>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </PrimaryLayout>
    </AuthContextProvider>
  )
}

export default MyApp
