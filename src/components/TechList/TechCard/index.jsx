import { useDataTechStore } from "../../../stores/useDataTechStore";
import { TechItem, AlignTechItemText } from "./styes";

export const TechCard = ({ techItem, onEditClick }) => {
  const { deleteTech } = useDataTechStore();
  return (
    <TechItem>
      <AlignTechItemText>
        <h3>{techItem.title}</h3>
        <div className="actionsButtons">
          <span>{techItem.status}</span>
          <button onClick={() => deleteTech(techItem.id)}>Excluir</button>
          <button onClick={() => onEditClick(techItem)}>Editar</button>
        </div>
      </AlignTechItemText>
    </TechItem>
  );
};
