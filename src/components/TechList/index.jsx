import { useState } from "react";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../CreateTechModa";
import { EditTechModal } from "../EditTechModal";
import { ListContainer,DivList,List, ListAlign } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon className="buttonStyle"  onClick={() => setIsCreateModalOpen(true)} icon={faPlus} />
        </div>
        {techList.length === 0 ? (
         <DivList divListStyle="style1">
           <p>Voce ainda nao possui tecnologias na sua lista</p>
         </DivList>
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
