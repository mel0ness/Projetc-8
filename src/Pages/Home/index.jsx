import "../../Style/Pages/Home/Home.scss"
import Card from "../../Components/CardLogement/index"

const Home = ({logements}) => {
    return (
        <div>
        <div className="homePres">Chez vous,
            partout et ailleurs
        </div>
        {
        logements.map(({id, cover, title}) => 
            <Card cover={cover} title={title} key={id} id={id} />
        )
        }
        </div>
    )
}

export default Home;