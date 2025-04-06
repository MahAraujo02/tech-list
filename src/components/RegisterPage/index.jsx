import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { useNavigate } from "react-router-dom";
import { FormBase, LabelInput, SelectOption } from "../../styles/form";
import { ContainerFormRegister } from "./styles.js";
import { AlignForm, Logo } from "../../styles/shared.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ButtonMedium, Button } from "../../styles/Buttons.jsx";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

      <Logo divLogoStyle="style1">
        <img src="./src/assets/logo.svg" alt="" />
        <ButtonMedium onClick={()=> navigate('/login')} >Voltar</ButtonMedium>
      </Logo>

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
            name="contact"
            register={register}
          />

          <SelectOption label="Selecionar Modulo" register={register} name='course_module'
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </SelectOption>

          <Button backgroundColor="primary" type="submit">
            Cadastrar
          </Button>
        </FormBase>
      </AlignForm>
    </ContainerFormRegister>
  );
};
