import { useParams } from "react-router-dom"
import "../../Style/Pages/Logement/Logement.scss"
import Deroul from "../../Components/Deroul/Deroul"
import Galerie from "../../Components/Galerie/Galerie"
import Naming from "../../Components/Naming/Naming"
import Rating from "../../Components/Rating/Rating"
import { useState } from "react"
import Error from "../Error"



const Logement = (Logements) => {
const [descr, updateDescr] = useState(false);
const [equip, updateEquip] = useState(false);
const [galerie, updateGalerie] = useState(0)
const arrayLogements = Logements.Logements;
const { idLogement } = useParams();
const idList = arrayLogements.reduce((acc, Logements) => 
    acc.includes(Logements.id) ? acc : acc.concat(Logements.id), []
)
const securityID = idList.find((id) => id === idLogement);

const idActual = arrayLogements.filter((d) => d.id === idLogement)

    return (
securityID ? ( 


<div className="logementGlobal">
<Galerie state={galerie} updateState={updateGalerie} infs={idActual[0].pictures} />
<div className="BlockIdentity">
<Naming infs={idActual[0].title} location={idActual[0].location} tags={idActual[0].tags} />
<Rating infs={idActual[0].rating} host={idActual[0].host} /></div>
<div className="BlockDeroulLog">
        <Deroul state={descr} updateState={updateDescr} infs={idActual[0].description} name={"Description"} parent={"Logement"} />
        <Deroul state={equip} updateState={updateEquip} infs={idActual[0].equipments} name={"Equipements"} parent={"Logement"} /> </div>
        </div>
    ) :  (
    <Error />
    ) )
}

export default Logement