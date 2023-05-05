import Star from "../Star/index";
import "../../Style/Components/Stars/Stars.scss"

const Stars = ({rating}) => {
const number = Number(rating);
const One = number;
const Two = number - 1;
const Three = number - 2 ;
const Four = number - 3;
const Five = number - 4;

return (
    <div className="StarsComp">
<Star state={One} />
<Star state={Two} />
<Star state={Three} />
<Star state={Four} />
<Star state={Five} />

    </div>
)
}

export default Stars