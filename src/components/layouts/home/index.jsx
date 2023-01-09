import Footer from "../../footer"
import NavBar from "../../header/nab-bar"
import LoginModal from "../../login-modal"

const HomeLayout =({children})=>{
    return <div className="App">
         <NavBar />
         {children}
         <Footer />
        <LoginModal />
    </div>
}
export default HomeLayout