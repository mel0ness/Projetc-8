import "../../Style/Components/Deroul/Deroul.scss"
import ArrowBot from "../../Assets/arrowBot.svg"
import ArrowTop from "../../Assets/arrowTop.svg"
const Deroul = ({state, updateState, infs, name, parent}) => {

    const superToggle = () => {
        updateState((current) => !current)
    }
return (
    state === true ? (<div className="deroulON">
        <div className={`deroul deroul--${parent}`} onClick={superToggle}>
        <div className="deroul--name">{name}</div>
        <img className="deroul--image" src={ArrowTop} alt={state.name} />
        </div>
        <div className={`deroulInfs deroulInfs--${parent}`}>
            { name === "Equipements" ? (
                <ul className="deroulList">
                    {infs.map(({d},index) => 
                        <li key={`${d}-${index}`}>{infs[index]}</li>
            )}
                </ul>
            ) 
            :(<div className="deroul--infsin">{infs}</div>)}
            </div>
        </div>
    ) :
    (
        <div className="deroulON">
        <div className={`deroul deroul--${parent}`} onClick={superToggle}>
            <div className="deroul--name">{name}</div>
            <img className="deroul--image" src={ArrowBot} alt={state.name} />
            </div></div>
    )
)

}

export default Deroul