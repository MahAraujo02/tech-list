import { useDataTechStore } from "../../../stores/useDataTechStore"

export const TechCard = ({techItem, onEditClick}) =>{

    const {deleteTech} = useDataTechStore()
    return (
        <div >
            <h3>{techItem.title}</h3>
            <p>{techItem.status}</p>
            <button onClick={()=> deleteTech(techItem.id)} >Excluir</button>
            <button onClick={() => onEditClick(techItem)}>Editar</button>
        </div>

    )
}