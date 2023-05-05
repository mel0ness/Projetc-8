import "../../Style/Components/Person/Person.scss"

const Person = ({host}) => {
return (
    <div className="PersonnAff">
        <div className="PersonnAff--Name">{host.name}</div>
        <img src={host.picture} alt={host.name} className="PersonnAff--Img"/>
    </div>
)
}

export default Person