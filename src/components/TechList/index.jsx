import { useState } from "react";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../CreateTechModa";

export const TechList = ({ techList }) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div>
      {isCreateModalOpen &&
        (<CreateTechModal setIsOpen={setIsCreateModalOpen} />)}
     
      {techList.length === 0 ? (
        <p>Voce ainda nao possui tecnoogias adicionadas</p>
      ) : (
        <ul>
          {techList.map((item) => (
            <li key={item.id}>
              <TechCard techItem={item} />
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
