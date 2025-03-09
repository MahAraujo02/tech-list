import { useEffect, useState } from "react";
import { useDataTechStore } from "../../stores/useDataTechStore";

export const Dashboard = () => {
  const { loadData, user } = useDataTechStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData(setLoading);
  }, []);

  console.log(user);
  return <>{loading ? <div>carregando</div> : <p>teste test</p> }</>;
};
