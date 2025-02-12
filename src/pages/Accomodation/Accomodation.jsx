import './accomodation.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import datas from '../../data/data.json'
import Header from '../../components/Header/Header'
import Slider from '../../components/Caroussel/Carousel'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import NotFound from '../NotFound/NotFound'
import Footer from '../../components/Footer/Footer'

function Accomodation() {
    const [imageSlider, setImageSlider] = useState([])

    const { id } = useParams()
    const dataCurrentAccomodation = datas.find((data) => data.id === id)

    useEffect(() => {
        if (dataCurrentAccomodation) {
            setImageSlider(dataCurrentAccomodation.pictures)
        }
    }, [id, dataCurrentAccomodation])

    if (!dataCurrentAccomodation) {
        return <NotFound />
    }

    const name = dataCurrentAccomodation.host.name.split(' ')
    const rating = dataCurrentAccomodation.rating
    const description = dataCurrentAccomodation.description
    const equipments = dataCurrentAccomodation.equipments

    return (
        <div>
            <Header />
            <Slider imageSlider={imageSlider} />
            <main className="accomodation">
                <div className="accomodation_content">
                    <div className="accomodation_content_info">
                        <h1>{dataCurrentAccomodation.title}</h1>
                        <p>{dataCurrentAccomodation.location}</p>
                        <div>
                            {dataCurrentAccomodation.tags.map((tag, index) => (
                                <Tag tag={tag} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="accomodation_content_host">
                        <div>
                            <div className="accomodation_content_host_name">
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img
                                src={dataCurrentAccomodation.host.picture}
                                alt="host of this accomodation"
                            />
                        </div>
                        <div className="accomodation_content_host_stars">
                            <Rating rating={rating} />
                        </div>
                    </div>
                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Description'} content={description} />
                    </div>
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Équipements'} content={equipments} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Accomodation
