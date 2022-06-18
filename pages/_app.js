import LayoutMain from "../components/Layout/Registered";
import AlertBar from "../components/AlertBar/AlertBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMain>
      {/* <AlertBar/> */}
      <Component {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
