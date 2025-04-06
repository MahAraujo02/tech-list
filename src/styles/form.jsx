import styled from "styled-components";
import { flex } from "./shared.jsx";


export const FormBase = styled.form`
  ${flex}
  width: 369px;
  max-width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

const LabelInputContainer = styled.div`
  ${flex}
  gap: 10px;
  width: 319px;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.sizes.text_small};
  color: ${({ theme }) => theme.colors.gray_0};
`;

const Input = styled.input`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.gray_2};
  color: ${({ theme }) => theme.colors.gray_0};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.sizes.text_base};
  padding: 10px;
  outline: none;
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray_0};
  }
`;

export const LabelInput = ({
  label,
  name,
  register,
  type = "text",
  rules,
  ...props
}) => (
  <LabelInputContainer>
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      type={type}
      {...(register && register(name, rules))}
      {...props}
    />
  </LabelInputContainer>
);

export const Select = styled.select`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.gray_2};
  color: ${({ theme }) => theme.colors.gray_1};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.sizes.text_base};
  padding: 10px;
  outline: none;
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray_0};
  }
  width: 319px;
`;
export const SelectOption = ({ label, name, register, children }) => (
    <LabelInputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Select {...(register && register(name))}>
        {children}
      </Select>
    </LabelInputContainer>
);
