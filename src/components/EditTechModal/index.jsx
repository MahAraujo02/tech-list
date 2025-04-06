import { useForm } from "react-hook-form";
import { useDataTechStore } from "../../stores/useDataTechStore";
import { FormBase, SelectOption, LabelInput } from "../../styles/form";
import { Button } from "../../styles/Buttons";
import { Modal, ModalContainer, TitleAndButton, AlignTitleAndButton} from "../../styles/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
    <ModalContainer>
      <Modal>
        <FormBase onSubmit={handleSubmit(submit)}>
        <AlignTitleAndButton>
            <TitleAndButton>
              <h3>Tecnologia Detalhes</h3>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setIsOpen(false)}
                className="close"
              />
            </TitleAndButton>
          </AlignTitleAndButton>

          <LabelInput label="Nome" name="title" register={register} />


          <SelectOption name="status" label='Status' register={register}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avançado">Avançado</option>
          </SelectOption>

          <Button backgroundColor="primary" type="submit">
            Salvar Alteraçoes
          </Button>
        </FormBase>
      </Modal>
    </ModalContainer>
  );
};
