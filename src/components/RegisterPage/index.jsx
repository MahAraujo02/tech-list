import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { useNavigate } from "react-router-dom";
import { FormBase, LabelInput } from "../../styles/form";
import { Button } from "../../styles/buttons";

import { ContainerFormRegister } from "./styles";
import { AlignForm } from "../../styles/shared";

export const RegisterForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const { registerUser } = useDataTechStore();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    registerUser(formData, navigate);
  };
  const password = watch("password");

  return (
    <ContainerFormRegister>
      <img src="./src/assets/logo.svg" alt="" />
      <AlignForm>
        <div className="title_and_span">
          <h2>Crie sua conta</h2>
          <span>Rapido e gratis, vamos nessa</span>
        </div>
        <FormBase onSubmit={handleSubmit(onSubmit)}>
          <LabelInput
            type="text"
            label="Nome"
            name="name"
            register={register}
          />

          <LabelInput
            label="Email"
            name="email"
            type="email"
            register={register}
            rules={{
              required: "O e-mail é obrigatório",
            }}
          />

          <LabelInput
            label="Senha"
            name="password"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register}
            rules={{
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            }}
          />

          <LabelInput
            label="Confirmar Senha  "
            name="confirmPassword"
            placeholder="Digite novamente sua senha"
            type="password"
            register={register}
            rules={{
              required: "A confirmação da senha é obrigatória",
              validate: (value) =>
                value === password || "As senhas não coincidem",
            }}
          />
          <LabelInput
            label="Bio"
            placeholder="Fale sobre você"
            name="bio"
            register={register}
          />

          <LabelInput
            label="Contato"
            placeholder="Opçao de contato"
            name="contato"
            register={register}
          />

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

          <Button backgroundColor="primary" type="submit">
            Cadastrar
          </Button>
        </FormBase>
      </AlignForm>
    </ContainerFormRegister>
  );
};
