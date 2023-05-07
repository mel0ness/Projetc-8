import Star from "../Star/index";
import "../../Style/Components/Stars/Stars.scss"

const Stars = ({rating}) => {
const number = Number(rating);
const One = number;
const Two = number - 1;
const Three = number - 2 ;
const Four = number - 3;
const Five = number - 4;

const Stars = [One, Two, Three, Four, Five];


return (
    <div className="StarsComp">
        { Stars.map(({d}, index) => 
        <Star state={Stars[index]} key={`${d}--${index}`} />)
        }
    </div>
)
}

export default Stars