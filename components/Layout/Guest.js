import GuestNav from '../Navigation/Guest'
import Footer from '../Guest/Footer'

const LayoutMain = ({children}) => {
  return ( 
    <>
      <GuestNav/>
      <main>{children}</main>
      <Footer/>
    </>
   );
}
 
export default LayoutMain;