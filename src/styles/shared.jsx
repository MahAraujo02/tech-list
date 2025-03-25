import styled from "styled-components";
import { flex } from "./form";

export const ContainerForm = styled.div`
  ${flex}
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_4};
`;
export const AlignForm = styled.div`
  ${flex}
  border-radius: 4px;
  width: 369px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_3};
  padding: 1rem 0 1rem 0;
  h2 {

    font-size: ${({ theme }) => theme.sizes.text_0};
    color: ${({ theme }) => theme.colors.gray_0};
  }
  .title_and_span {
    ${flex}
    gap: 20px;
    align-items: center;
    span {
      font-size: ${({ theme }) => theme.sizes.text_small};
      color: ${({ theme }) => theme.colors.gray_1};
    }
  }

  
`;