import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";

export const CreateTechModal = ({setIsOpen}) => {
  const { register, handleSubmit } = useForm();
  const {addTech} = useDataTechStore()
  const submit = (formData) => {
    addTech(formData)
    setIsOpen(false); 
  }

  return (
   <div>
    <button onClick={()=> setIsOpen(false)}>X</button>
     <form onSubmit={handleSubmit(submit)}>
      <label htmlFor="">Tecnologia</label>
      <input type="text" {...register("title")} />
      <select name="status" {...register("status")}>
        <option value="iniciante">Iniciante</option>
        <option value="intermediario">Intermediario</option>
        <option value="avançado">Avançado</option>
      </select>
      <button type="submit">Salvar</button>
    </form>
   </div>
  );
};
