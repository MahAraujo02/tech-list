import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const {registerUser} = useDataTechStore()
  const navigate = useNavigate()

  const onSubmit = async(formData) => {
    registerUser(formData, navigate)
  };
  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input
        type="text"
        {...register("name", { required: "O nome é obrigatório" })}
      />

      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: "O e-mail é obrigatório" })}
      />

      <label>Senha</label>
      <input
        type="password"
        {...register("password", {
          required: "A senha é obrigatória",
          minLength: {
            value: 6,
            message: "A senha deve ter pelo menos 6 caracteres",
          },
        })}
      />

      <label>Confirmar Senha</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: "A confirmação da senha é obrigatória",
          validate: (value) => value === password || "As senhas não coincidem",
        })}
      />

      <label>Bio</label>
      <input type="text" {...register("bio")} />

      <label>Contato</label>
      <input type="text" {...register("contact")} />

      <label>Selecionar Módulo</label>
      <select
        {...register("course_module", { required: "Selecione um módulo" })}
      >
        <option value="frontend-intro">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="frontend-advanced">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="backend-intro">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="backend-advanced">
          Quarto módulo (Backend Avançado)
        </option>
      </select>

      <button type="submit">Registrar</button>
    </form>
  );
};
