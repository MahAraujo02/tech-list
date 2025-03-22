import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";

export const EditTechModal = ({ setIsOpen, editingTech }) => {
  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const editId = editingTech.id;
  const { updateTech } = useDataTechStore();

  const submit = (formData) => {
    updateTech(formData, editId);
    setIsOpen(false); 
  };

  return (
    <div>
      <button onClick={() => setIsOpen(false)}>X</button>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">Tecnologia</label>
        <input type="text" {...register("title")} />
        <select name="status" {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avançado">Avançado</option>
        </select>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};