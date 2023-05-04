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
        <div>{name}</div>
        <img src={ArrowTop} alt={state.name} />
        </div>
        <div className="deroulInfs">
            { name === "Equipements" ? (
                <ul className="deroulList">
                    {infs.map(({d},index) => 
                        <li key={`${d}-${index}`}>{infs[index]}</li>
            )}
                </ul>
            ) 
            :(infs)}
            </div>
        </div>
    ) :
    (
        <div className="deroulON">
        <div className={`deroul deroul--${parent}`} onClick={superToggle}>
            <div>{name}</div>
            <img src={ArrowBot} alt={state.name} />
            </div></div>
    )
)

}

export default Deroul