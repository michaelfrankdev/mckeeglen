import GuestNav from "../Navigation/Guest"
import Footer from "./Footer"

const Layout = ({children}) => {
  return ( 
    <div className="layoutContainer">
      <GuestNav/>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
   );
}
 
export default Layout;