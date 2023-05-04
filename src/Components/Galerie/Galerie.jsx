import "../../Style/Components/Galerie/Galerie.scss"
import ArrowLeft from "../../Assets/arrowLeft.svg"
import ArrowRight from "../../Assets/arrowRight.svg"

const Galerie = ({state, updateState, infs}) => {

const moveToLeft = () => {
return (
    state === 0 ? updateState(state = (infs.length -1)) : updateState(state -1)
)
}

const moveToRight = () => {
    return (
        state === (infs.length -1) ? updateState(state = 0) : updateState(state + 1)
    )
}

return (
infs.length > 1 ? (
    <div className="Galerie">
        <img src={ArrowLeft} alt="left" className=" arrow arrow--arrowLeft" onClick={moveToLeft}/>
        <img src={infs[state]} alt="galerie" className="galPicture" />
        <img src={ArrowRight} alt="right" className="arrow arrow--arrowRight" onClick={moveToRight} />
        <div className="compteur">{`${state + 1}/${infs.length}`}</div>
    </div>
) : 
(  <div className="Galerie">
<img src={infs[0]} alt="galerie" className="galPicture" />
</div>)
)
}

export default Galerie