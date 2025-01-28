import './gallery.scss'
import datas from '../../datas/data.jsx'
import Card from '../Card/Card'

function Gallery() {
    return (
        <main className="gallery">
            {datas.map((data) => (
                <Card
                    key={data.id}
                    id={data.id}
                    cover={data.cover}
                    title={data.title}
                />
            ))}
        </main>
    )
}

export default Gallery
