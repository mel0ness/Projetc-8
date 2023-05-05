import "../../Style/Components/Naming/Naming.scss"

const Naming = ({infs, location, tags}) => {
return (
<div className="location">
    <h1 className="location--title">{infs}</h1>
    <div className="location--location">{location}</div>
    <div className="location--tags">
    {tags.map(({d}, index) => 
    <div key={`${d}-${index}`} className="location--tags_element">{tags[index]}</div>)}</div>
    </div>
)
}

export default Naming