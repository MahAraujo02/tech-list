import { useEffect, useState } from "react";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { useNavigate } from "react-router-dom";
import { TechList } from "../TechList";
import { Logo } from "../../styles/shared";
import { AlignNameAndModule, Header, Main, NameAndModule } from "./styles";
import { ButtonMedium } from "../../styles/Buttons";

export const Dashboard = () => {
  const { loadData, user, techsData } = useDataTechStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadData(setLoading, navigate);
  }, []);

  console.log(techsData);
  return (
    <>
      {loading ? (
        <div>carregando</div>
      ) : (
        <div className="body">
          <Header>
            <Logo divLogoStyle="style2">
              <img src="./src/assets/logo.svg" alt="" />
              <ButtonMedium>Sair</ButtonMedium>
            </Logo>
          </Header>
          <AlignNameAndModule>
            <NameAndModule>
              <h1>Olá, {user.name}</h1>
              <span>{user.course_module}</span>
            </NameAndModule>
          </AlignNameAndModule>
          <Main>
            <TechList techList={techsData} />
          </Main>
        </div>
      )}
    </>
  );
};
