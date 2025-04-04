import { useState } from "react";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../CreateTechModa";
import { EditTechModal } from "../EditTechModal";
import { ListContainer,DivList,List, ListAlign } from "./styles";

export const TechList = ({ techList }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditeModalOpen, setIsEditeModalOpen] = useState(false);
  const [editingTech, setEditingTech] = useState(null);

  const handleEditClick = (techItem) => {
    setIsEditeModalOpen(true);
    setEditingTech(techItem);
  };

  return (
    <ListContainer>
      {isCreateModalOpen && (
        <CreateTechModal setIsOpen={setIsCreateModalOpen} />
      )}
      {isEditeModalOpen && (
        <EditTechModal
          setIsOpen={setIsEditeModalOpen}
          editingTech={editingTech}
        />
      )}

      <ListAlign>
        <div className="title_and_button">
          <h3>Tecnologias</h3>
          <button onClick={() => setIsCreateModalOpen(true)}>
            Adicionar Tecnologia
          </button>
        </div>
        {techList.length === 0 ? (
          <p>Voce ainda nao possui itens na sua lista</p>
        ) : (
          <DivList>
            <List>
              {techList.map((item) => (
                
                  <TechCard techItem={item} key={item.id} onEditClick={handleEditClick} />
              
              ))}
            </List>
          </DivList>
        )}
      </ListAlign>
    </ListContainer>
  );
};
