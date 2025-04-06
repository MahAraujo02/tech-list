import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { Modal, ModalContainer, TitleAndButton, AlignTitleAndButton } from "../../styles/modal";
import { FormBase, SelectOption, LabelInput } from "../../styles/form";
import { Button } from "../../styles/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const CreateTechModal = ({ setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const { addTech } = useDataTechStore();
  const submit = (formData) => {
    addTech(formData);
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <Modal>
        <FormBase onSubmit={handleSubmit(submit)}>
          <AlignTitleAndButton>
            <TitleAndButton>
              <h3>Cadastrar Tecnologia</h3>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setIsOpen(false)}
                className="close"
              />
            </TitleAndButton>
          </AlignTitleAndButton>

          <LabelInput label="Nome" name="title" register={register} />

          <SelectOption
            name="status"
            label="Seelcionar Status"
            register={register}
          >
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avançado">Avançado</option>
          </SelectOption>

          <Button backgroundColor="primary" type="submit">
            Salvar
          </Button>
        </FormBase>
      </Modal>
    </ModalContainer>
  );
};
