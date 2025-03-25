import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { useNavigate } from "react-router-dom";
import { AlignForm, ContainerForm} from "../../styles/shared.jsx";
import { FormBase } from "../../styles/form.jsx";
import { Button } from "../../styles/buttons.jsx";
import { LabelInput } from "../../styles/form.jsx";

export const LoginPage = () => {
  const { loginAuth } = useDataTechStore();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = async (formData) => {
    loginAuth(formData, navigate);
  };

  return (
    <ContainerForm>
      <img src="./src/assets/logo.svg" alt="" />
      <AlignForm>
        <h2>Login</h2>
        <FormBase onSubmit={handleSubmit(submit)}>
          <LabelInput
            label="Email"
            name="email"
            type="email"
            register={register}
          />

          <LabelInput label="Senha" name="password" type="password" />
          <Button backgroundColor="primary" type="submit">
            Entrar
          </Button>
          <div className="title_and_span">
            <span>Ainda nao possui uma conta?</span>
            <Button
              backgroundColor="gray_1"
              onClick={() => navigate("/register")}
            >
              Cadastre-se
            </Button>
          </div>
        </FormBase>
      </AlignForm>
    </ContainerForm>
  );
};
