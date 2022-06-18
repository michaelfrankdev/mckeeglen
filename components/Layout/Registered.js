import RegisteredNav from '../Navigation/Registered'
import Footer from './Footer'

const LayoutMain = ({children}) => {
  return ( 
    <div className="layoutContainer">
      <RegisteredNav/>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
   );
}
 
export default LayoutMain;