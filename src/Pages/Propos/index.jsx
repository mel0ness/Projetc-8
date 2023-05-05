import "../../Style/Pages/Propos/Propos.scss"
import Deroul from "../../Components/Deroul/Deroul"
import { useState } from "react"
import FondPropos from "../../Assets/Propos.png"

const Infos = { Fiabilite : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.", 

Respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",

Service : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",

Securite : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}

const Propos = () => {

    const [fiabilite, updateFiabilite] = useState(false)
    const [respect, updateRespect] = useState(false)
    const [service, updateService] = useState(false)
    const [securite, updateSecurite] = useState(false)
    return (<div className="blockPropos">
        <div className="imgPropos">
<img src={ FondPropos } alt="a propos" />
        </div>

        <Deroul state={fiabilite} updateState={updateFiabilite} infs={Infos.Fiabilite} name={"Fiabilité"} parent={"Propos"} />
        <Deroul state={respect} updateState={updateRespect} infs={Infos.Respect} name={"Respect"} parent={"Propos"} />
        <Deroul state={service} updateState={updateService} infs={Infos.Service} name={"Service"} parent={"Propos"} />
        <Deroul state={securite} updateState={updateSecurite} infs={Infos.Securite} name={"Sécurité"} parent={"Propos"} />
        </div>
    )
}

export default Propos