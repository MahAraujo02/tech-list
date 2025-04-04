import styled from "styled-components";

export const TechItem = styled.div`
  align-items: center;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  width: 90%;
  height: 49px;
  background-color: ${({ theme }) => theme.colors.gray_4};
  border: transparent;
  border-radius: 4px;
`;

export const AlignTechItemText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  h3 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray_0};
    font-size: ${({ theme }) => theme.sizes.text_base1};
  }
  .actionsButtons {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 5px;
    span {
      font-size: ${({ theme }) => theme.sizes.text_base1};
      color: ${({ theme }) => theme.colors.gray_1};
    }
  }
`;
