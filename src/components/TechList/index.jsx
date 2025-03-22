import { useState } from "react";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../CreateTechModa";
import { EditTechModal } from "../EditTechModal";

export const TechList = ({ techList }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditeModalOpen, setIsEditeModalOpen] = useState(false);
  const [editingTech, setEditingTech] = useState(null)

  const handleEditClick = (techItem) => {
    setIsEditeModalOpen(true)
    setEditingTech(techItem)
  }

  return (
    <div>
      {isCreateModalOpen && (
        <CreateTechModal setIsOpen={setIsCreateModalOpen} />
      )}
      {isEditeModalOpen && <EditTechModal setIsOpen={setIsEditeModalOpen} editingTech={editingTech} />}

      {techList.length === 0 ? (
        <p>Voce ainda nao possui tecnoogias adicionadas</p>
      ) : (
        <ul>
          {techList.map((item) => (
            <li key={item.id}>
              <TechCard techItem={item} onEditClick={handleEditClick}/>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setIsCreateModalOpen(true)}>
        Adicionar Tecnologia
      </button>
    </div>
  );
};
