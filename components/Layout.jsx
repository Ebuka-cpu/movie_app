import Footer from "./Footer"
import Meta from "./Meta"
import Navbar from "./Navbar"


const Layout = ({children}) => {
  return (
    <div>
      <Meta/>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout