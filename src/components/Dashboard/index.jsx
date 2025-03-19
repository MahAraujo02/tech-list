import { useEffect, useState } from "react";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { useNavigate } from "react-router-dom";
import { TechList } from "../TechList";

export const Dashboard = () => {
  const { loadData, user, techsData } = useDataTechStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  useEffect(() => {
    loadData(setLoading, navigate);
  }, []);


  console.log(user.techs);
  return (
    <>
      {loading ? (
        <div>carregando</div>
      ) : (
        <div>
          <p>{user.name}</p>
          <h2>Tecnologias</h2>
          <div>
            <TechList techList={techsData} />
          </div>
        </div>
      )}
    </>
  );
};
