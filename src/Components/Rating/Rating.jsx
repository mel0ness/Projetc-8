import Stars from "../Stars/index"
import Person from "../Person/Person"
import "../../Style/Components/Rating/Rating.scss"

const Rating = ({infs, host}) => {
return (
    <div className="rating">
<Stars rating={infs} />
<Person host={host} />
    </div>
)
}

export default Rating