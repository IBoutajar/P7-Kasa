import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import './home.scss'

function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <Gallery />
        </div>
    )
}

export default Home
