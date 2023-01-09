import About from "../components/about"
import Features from "../components/features"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import HomeLayout from "../components/layouts/home"
import Team from "../components/team"
const HomePage =()=>{
    return (
        // <div className="App">
            // <Header />
            <HomeLayout>
                <main className="main-content">
                    <Hero />
                    <About />
                    <Features />
                    <Team />
                </main>
            </HomeLayout>
     
            // <Footer />
        // </div>
    )
}

export default HomePage