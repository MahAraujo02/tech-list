import { useDataTechStore } from "../../../stores/useDataTechStore";
import { TechItem, AlignTechItemText } from "./styes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const TechCard = ({ techItem, onEditClick }) => {
  const { deleteTech } = useDataTechStore();
  return (
    <TechItem>
      <AlignTechItemText>
        <h3>{techItem.title}</h3>
        <div className="actionsButtons">
          <span>{techItem.status}</span>

          <FontAwesomeIcon
            className="colorGray"
            onClick={() => onEditClick(techItem)}
            icon={faPencil}
            
          />

          <FontAwesomeIcon
            className="colorGray"
            onClick={() => deleteTech(techItem.id)}
            icon={faTrashCan}
          />

         
        </div>
      </AlignTechItemText>
    </TechItem>
  );
};
